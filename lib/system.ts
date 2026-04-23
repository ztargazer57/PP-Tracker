import { NextResponse } from "next/server";

export async function fetchDailyRoutineStatus() {
    const response = await fetch("/api/daily?mode=today");
    return response.json();
}

export async function updateDailyRoutineHistoryRecord(
  id: string | number,
  payload: {
    gestureDrawing: boolean;
    construction: boolean;
    targetedPractice: boolean;
  }
) {
  const res = await fetch(`/api/daily/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to update routine history record");
  }

  return res.json();
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
    const response = await fetch("/api/daily", {
        cache: "no-store",
    });
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

export async function fetchAllWeeklySubmissions() {
  const response = await fetch("/api/weekly/all", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch all submissions");
  }

  return response.json();
}

export async function getRandomWeeklySubmissions() {
  const res = await fetch("/api/weekly/random", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch submissions");
  }

  return res.json();
}

// Weekly Manage

export async function fetchManageWeeklySubmissions() {
  const response = await fetch("/api/weekly/manage", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch weekly submissions for management.");
  }

  return response.json();
}

export async function updateManageWeeklySubmission(
  id: number,
  payload: {
    title: string;
    description: string;
    hoursSpent: number;
    date: string;
    image: string;
  },
) {
  const response = await fetch(`/api/weekly/manage/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to update weekly submission.");
  }

  return data;
}


// Monthly Reviews

export async function getBestPieces(year?: number) {
  const query = year ? `?year=${year}` : "";

  const response = await fetch(`/api/main${query}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch best pieces.");
  }

  return response.json();
}

export async function getBestPieceByMonth(month: string) {
  const response = await fetch(`/api/monthly?month=${month}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch best piece.");
  }

  return response.json();
}

export async function selectAsBestPiece(selectedId: number) {
  const response = await fetch("/api/monthly", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ selectedId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to select best piece.");
  }

  return response.json();
}

// Extra

export async function fetchGalleryCover() {
  const response = await fetch("/api/gallery-cover", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch gallery cover");
  }

  return response.json();
}

export async function updateGalleryCover(picUrl: string) {
  const response = await fetch("/api/gallery-cover", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ picUrl }),
  });

  if (!response.ok) {
    throw new Error("Failed to update gallery cover");
  }

  return response.json();
}

export async function fetchNotes() {
    const response = await fetch("/api/extra");
    return response.json();
}

export async function fetchPostNotes(notes: string) {
    const response = await fetch("/api/extra", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(notes),
    })
    return response.json();
}

// Savings

export async function fetchSavings() {
  const res = await fetch("/api/savings", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch savings");
  }

  return res.json();
}

export async function createSavingsEntry(amount: number, note?: string) {
  const res = await fetch("/api/savings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, note }),
  });

  if (!res.ok) {
    throw new Error("Failed to create savings entry");
  }

  return res.json();
}
