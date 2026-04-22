export const DAILY_ROUTINE_UPDATED_EVENT = "daily-routine-updated";

export type DailyRoutineRecord = {
  id: number | string;
  date: string;
  gestureDrawing: boolean;
  construction: boolean;
  targetedPractice: boolean;
};

export function emitDailyRoutineUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(DAILY_ROUTINE_UPDATED_EVENT));
  }
}

export function subscribeToDailyRoutineUpdates(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(DAILY_ROUTINE_UPDATED_EVENT, callback);

  return () => {
    window.removeEventListener(DAILY_ROUTINE_UPDATED_EVENT, callback);
  };
}

export function isRoutineCompleted(record: DailyRoutineRecord) {
  return (
    record.gestureDrawing &&
    record.construction &&
    record.targetedPractice
  );
}

/**
 * Extracts a stable YYYY-MM-DD key from API/DB date strings.
 * Works best when your backend returns ISO strings.
 */
export function getRecordDateKey(dateString: string) {
  return dateString.slice(0, 10);
}

export function getLocalTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function shiftDateKey(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);

  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

export function calculateStreak(records: DailyRoutineRecord[]) {
  const completedDays = new Set(
    records.filter(isRoutineCompleted).map((record) => getRecordDateKey(record.date))
  );

  let streak = 0;
  let cursor = getLocalTodayKey();

  if (!completedDays.has(cursor)) {
    cursor = shiftDateKey(cursor, -1);
  }

  while (completedDays.has(cursor)) {
    streak++;
    cursor = shiftDateKey(cursor, -1);
  }

  return streak;
}
