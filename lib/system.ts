import { NextResponse } from "next/server";

export async function fetchDailyRoutineStatus() {
    const response = await fetch("/api/daily");
    return response.json();
}

export async function fetchDailyRoutineUpdate(field: string, value: boolean) {
    const response = await fetch("/api/daily",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            field: field,
            value: value,
        }),
    });
    return response.json();
}

export async function fetchDailyRoutineHistory() {
    const response = await fetch("api/daily");
    return response.json();
}

// Weekly Submissions

export async function fetchWeeklySubmissionStatus() {
    const response = await fetch("/api/weekly");
    return response.json();
}


export async function fetchWeeklySubmissionsSubmit(formData: FormData) {
    const response = await fetch("/api/weekly",{
        method: "POST",
        body: formData
    })
    return response.json();
}
