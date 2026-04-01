import { prisma } from "@/lib/prisma";


export async function getDailyRoutineStatus() {
    const today = new Date();
    today.setHours(0,0,0,0);

    const data = await prisma.dailyRoutine.upsert({
        where: {
            date: today,
        },
        update: {},
        create: {
            date: today,
        }
    })
        return data;
}

export async function getDailyRoutineHistory() {
    const data = await prisma.dailyRoutine.findMany({
        take: 7,
        orderBy: {
            date: "desc",
        }
    })
    return data;
}

export async function postDailyRoutineUpdate(field: string, value: boolean) {
    const today = new Date();
    today.setHours(0,0,0,0);
    const data = await prisma.dailyRoutine.update({
        where: {date: today},
        data: { [field]:  value}
    });
    return data;
}

function getISOWeekNumber(date: Date) {
    const temp = new Date(date);

    // Set to nearest Thursday (ISO rule)
    temp.setDate(temp.getDate() + 4 - (temp.getDay() || 7));

    const yearStart = new Date(temp.getFullYear(), 0, 1);

    const weekNo = Math.ceil(
        ((temp.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );
    return weekNo;
}

export async function getWeeklySubmissions() {
    const now = new Date()
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

export async function postWeeklySubmission(title: string, description: string, hoursSpent: number, date: string, weekNumber: number, image: string) {
    const now = new Date()
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
            title: title,
            description: description,
            hoursSpent: hoursSpent,
            date: date,
            weekNumber: weekNumber,
            image: image,
        }
    });
    return data;
}
