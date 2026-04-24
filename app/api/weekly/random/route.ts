import { NextResponse } from "next/server";
import { getRandomWeeklySubmissions } from "@/lib/logic";

export async function GET() {
  try {
    const data = await getRandomWeeklySubmissions();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch random weekly submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch random weekly submissions." },
      { status: 500 }
    );
  }
}