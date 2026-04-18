import { NextRequest, NextResponse } from "next/server";
import { getBestPieces } from "@/lib/logic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const yearParam = searchParams.get("year");
    const year = yearParam ? Number(yearParam) : undefined;

    const data = await getBestPieces(year);

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/monthly/main error:", error);
    return NextResponse.json(
      { message: "Failed to fetch best pieces." },
      { status: 500 }
    );
  }
}
