import { NextRequest, NextResponse } from "next/server";
import { updateManageWeeklySubmissionById } from "@/lib/logic";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const updated = await updateManageWeeklySubmissionById(Number(id), body);

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Failed to update weekly submission:", error);

    return NextResponse.json(
      { error: "Failed to update weekly submission." },
      { status: 500 },
    );
  }
}
