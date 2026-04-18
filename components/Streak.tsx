"use client";

import { useCallback, useEffect, useState } from "react";
import {
  fetchDailyRoutineHistory,
  fetchDailyRoutineStatus,
} from "@/lib/system";
import { Button } from "./ui/button";
import { RefreshCcw, RefreshCwOff } from "lucide-react";

type DailyRoutine = {
  id: number;
  date: string;
  gestureDrawing: boolean;
  construction: boolean;
  targetedPractice: boolean;
};

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isCompleted(record: DailyRoutine) {
  return (
    record.gestureDrawing &&
    record.construction &&
    record.targetedPractice
  );
}

function calculateStreak(records: DailyRoutine[]) {
  const completedDays = new Set(
    records
      .filter(isCompleted)
      .map((record) => formatDateKey(startOfDay(new Date(record.date))))
  );

  let streak = 0;
  let cursor = startOfDay(new Date());

  if (!completedDays.has(formatDateKey(cursor))) {
    cursor = addDays(cursor, -1);
  }

  while (completedDays.has(formatDateKey(cursor))) {
    streak++;
    cursor = addDays(cursor, -1);
  }

  return streak;
}

export default function Streak() {
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadStreak = useCallback(async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const [today, history] = await Promise.all([
        fetchDailyRoutineStatus(),
        fetchDailyRoutineHistory(),
      ]);

      const allRecords: DailyRoutine[] = [today, ...history];
      const result = calculateStreak(allRecords);

      setStreak(result);
    } catch (error) {
      console.error("Failed to load streak:", error);
      setStreak(0);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadStreak();

    const handleRoutineUpdated = () => {
      loadStreak();
    };

    window.addEventListener("daily-routine-updated", handleRoutineUpdated);

    return () => {
      window.removeEventListener("daily-routine-updated", handleRoutineUpdated);
    };
  }, [loadStreak]);

  return (
    <div className="flex justify-center items-center gap-5 h-fit w-fit mt-2 mx-auto">
      <h1 className="text-2xl">Streak:</h1>

      <span className="text-7xl text-orange-400">
        {loading ? "..." : streak}
      </span>

      <Button
        type="button"
        variant="outline"
        onClick={() => loadStreak(true)}
        disabled={refreshing}
      >
        {refreshing ? <RefreshCwOff/> : <RefreshCcw/>}
      </Button>
    </div>
  );
}
