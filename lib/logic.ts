import { prisma } from "@/lib/prisma";

/* ---------------------------------- */
/* Helpers                            */
/* ---------------------------------- */

function startOfDay(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfTomorrow(date = new Date()) {
  const d = startOfDay(date);
  d.setDate(d.getDate() + 1);
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

/* ---------------------------------- */
/* Daily Routine                      */
/* ---------------------------------- */

export async function ensureDailyRoutineRecords(daysToBackfill = 30) {
  const today = startOfDay();
  const start = addDays(today, -(daysToBackfill - 1));
  const tomorrow = startOfTomorrow();

  const existing = await prisma.dailyRoutine.findMany({
    where: {
      date: {
        gte: start,
        lt: tomorrow,
      },
    },
    select: {
      date: true,
    },
  });

  const existingKeys = new Set(
    existing.map((row) => formatDateKey(startOfDay(row.date)))
  );

  const missingRows: { date: Date }[] = [];

  let current = new Date(start);
  while (current <= today) {
    const key = formatDateKey(current);

    if (!existingKeys.has(key)) {
      missingRows.push({
        date: new Date(current),
      });
    }

    current = addDays(current, 1);
  }

  if (missingRows.length > 0) {
    await prisma.dailyRoutine.createMany({
      data: missingRows,
      skipDuplicates: true,
    });
  }
}

export async function getDailyRoutineStatus() {
  await ensureDailyRoutineRecords();

  const today = startOfDay();
  const tomorrow = startOfTomorrow();

  const data = await prisma.dailyRoutine.findFirst({
    where: {
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  if (!data) {
    return await prisma.dailyRoutine.create({
      data: { date: today },
    });
  }

  return data;
}

export async function getDailyRoutineHistory() {
  await ensureDailyRoutineRecords();

  const today = startOfDay();

  const data = await prisma.dailyRoutine.findMany({
    take: 12,
    where: {
      date: {
        lt: today,
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  return data;
}

export async function postDailyRoutineUpdate(
  field: "gestureDrawing" | "construction" | "targetedPractice",
  value: boolean,
) {
  await ensureDailyRoutineRecords();

  const today = startOfDay();
  const tomorrow = startOfTomorrow();

  const existing = await prisma.dailyRoutine.findFirst({
    where: {
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
    select: {
      id: true,
    },
  });

  if (!existing) {
    return await prisma.dailyRoutine.create({
      data: {
        date: today,
        [field]: value,
      },
    });
  }

  return await prisma.dailyRoutine.update({
    where: { id: existing.id },
    data: { [field]: value },
  });
}

/* ---------------------------------- */
/* Weekly Submissions                 */
/* ---------------------------------- */

function getISOWeekNumber(date: Date) {
  const temp = new Date(date);

  // Set to nearest Thursday (ISO rule)
  temp.setDate(temp.getDate() + 4 - (temp.getDay() || 7));

  const yearStart = new Date(temp.getFullYear(), 0, 1);

  const weekNo = Math.ceil(
    ((temp.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  );

  return weekNo;
}

export async function getWeeklySubmissions() {
  const now = new Date();
  const currentWeek = getISOWeekNumber(now);
  const currentYear = now.getFullYear();

  const data = await prisma.weeklySubmission.upsert({
    where: {
      year_weekNumber: {
        year: currentYear,
        weekNumber: currentWeek,
      },
    },
    update: {},
    create: {
      year: currentYear,
      weekNumber: currentWeek,
      date: now,
    },
  });

  return data;
}

export async function postWeeklySubmission(
  title: string,
  description: string,
  hoursSpent: number,
  date: string,
  weekNumber: number,
  image: string,
) {
  const now = new Date();
  const currentWeek = getISOWeekNumber(now);
  const currentYear = now.getFullYear();

  const data = await prisma.weeklySubmission.update({
    where: {
      year_weekNumber: {
        year: currentYear,
        weekNumber: currentWeek,
      },
    },
    data: {
      title,
      description,
      hoursSpent,
      date: new Date(date),
      weekNumber,
      image,
    },
  });

  return data;
}

export async function getAllWeeklySubmissions() {
  return await prisma.weeklySubmission.findMany({
    orderBy: {
      date: "desc",
    },
  });
}

export async function getRandomWeeklySubmissions(limit = 10) {
  const submissions = await prisma.weeklySubmission.findMany({
    orderBy: {
      date: "desc",
    },
  });

  for (let i = submissions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [submissions[i], submissions[j]] = [submissions[j], submissions[i]];
  }

  return submissions.slice(0, limit);
}

/* ---------------------------------- */
/* Monthly Reviews                    */
/* ---------------------------------- */

function getYearNumber(date: Date) {
  const temp = new Date(date);
  temp.setDate(temp.getDate() + 4 - (temp.getDay() || 7));
  return temp.getFullYear();
}

const monthMap: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export async function getBestPieces(year?: number) {
  const selectedYear = year ?? new Date().getFullYear();

  return await prisma.monthlyReview.findMany({
    where: { year: selectedYear },
    include: {
      bestPiece: true,
    },
    orderBy: {
      month: "asc",
    },
  });
}

export async function getSubmissionsByMonth(month: string) {
  const monthNumber = monthMap[month.toLowerCase()];

  if (!monthNumber) {
    return [];
  }

  const year = new Date().getFullYear();

  return await prisma.weeklySubmission.findMany({
    where: {
      year,
      date: {
        gte: new Date(year, monthNumber - 1, 1),
        lt: new Date(year, monthNumber, 1),
      },
    },
    orderBy: {
      date: "desc",
    },
  });
}

export async function getMonthlyReviewByMonth(month: string) {
  const monthNumber = monthMap[month.toLowerCase()];

  if (!monthNumber) {
    throw new Error("Invalid month.");
  }

  const year = new Date().getFullYear();

  return await prisma.monthlyReview.findUnique({
    where: {
      month_year: {
        month: monthNumber,
        year,
      },
    },
    include: {
      bestPiece: true,
    },
  });
}

export async function selectAsBest(selectedId: number) {
  const submission = await prisma.weeklySubmission.findUnique({
    where: { id: selectedId },
    select: {
      id: true,
      date: true,
      year: true,
    },
  });

  if (!submission) {
    throw new Error("Submission not found.");
  }

  const month = new Date(submission.date).getMonth() + 1;
  const year = submission.year;

  await prisma.monthlyReview.upsert({
    where: {
      month_year: {
        month,
        year,
      },
    },
    update: {
      bestPieceId: selectedId,
    },
    create: {
      month,
      year,
      bestPieceId: selectedId,
    },
  });

  return {
    month,
    year,
    bestPieceId: selectedId,
  };
}

/* ---------------------------------- */
/* Extra                              */
/* ---------------------------------- */

export async function getGalleryCover() {
  const data = await prisma.extra.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      note: "",
      picUrl: "",
    },
    update: {},
    select: {
      picUrl: true,
    },
  });

  return data;
}

export async function setGalleryCover(picUrl: string) {
  const data = await prisma.extra.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      note: "",
      picUrl,
    },
    update: {
      picUrl,
    },
    select: {
      picUrl: true,
    },
  });

  return data;
}

export async function fetchNotes() {
  const data = await prisma.extra.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      note: "",
    },
    update: {},
  });

  return data;
}

export async function postNotes(note: string) {
  const data = await prisma.extra.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      note,
    },
    update: {
      note,
    },
  });

  return data;
}
