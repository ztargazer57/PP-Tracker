import { NextResponse } from "next/server";
import { getManageWeeklySubmissions } from "@/lib/logic";

export async function GET() {
  try {
    const data = await getManageWeeklySubmissions();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch manageable weekly submissions:", error);

    return NextResponse.json(
      { error: "Failed to fetch manageable weekly submissions." },
      { status: 500 },
    );
  }
}
