import { NextRequest, NextResponse } from "next/server";
import { getManageWeeklySubmissionsPaginated } from "@/lib/logic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = Number(searchParams.get("page") ?? "1");
    const pageSize = Number(searchParams.get("pageSize") ?? "10");

    const data = await getManageWeeklySubmissionsPaginated(page, pageSize);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch manageable weekly submissions:", error);

    return NextResponse.json(
      { error: "Failed to fetch manageable weekly submissions." },
      { status: 500 },
    );
  }
}
