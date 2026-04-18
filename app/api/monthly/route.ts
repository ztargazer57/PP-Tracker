import { NextRequest, NextResponse } from "next/server";
import { getMonthlyReviewByMonth, selectAsBest } from "@/lib/logic";

export async function GET(request: NextRequest) {
  try {
    const month = request.nextUrl.searchParams.get("month");

    if (!month) {
      return NextResponse.json(
        { message: "month is required." },
        { status: 400 }
      );
    }

    const review = await getMonthlyReviewByMonth(month);

    return NextResponse.json(review);
  } catch (error) {
    console.error("GET /api/monthly error:", error);
    return NextResponse.json(
      { message: "Failed to fetch monthly review." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { selectedId } = await request.json();

    if (!selectedId) {
      return NextResponse.json(
        { message: "selectedId is required." },
        { status: 400 }
      );
    }

    const result = await selectAsBest(selectedId);

    return NextResponse.json({
      message: "Best piece selected successfully.",
      data: result,
    });
  } catch (error) {
    console.error("POST /api/monthly error:", error);
    return NextResponse.json(
      { message: "Failed to select best piece." },
      { status: 500 }
    );
  }
}
