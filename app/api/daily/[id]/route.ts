import { NextRequest, NextResponse } from "next/server";
// change this import to match your DB setup
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const updatedRecord = await prisma.dailyRoutine.update({
      where: {
        id: Number(id), // use id directly if your id is a string
      },
      data: {
        gestureDrawing: body.gestureDrawing,
        construction: body.construction,
        targetedPractice: body.targetedPractice,
      },
    });

    return NextResponse.json(updatedRecord, { status: 200 });
  } catch (error) {
    console.error("PATCH /api/daily/[id] error:", error);

    return NextResponse.json(
      { error: "Failed to update routine history record" },
      { status: 500 }
    );
  }
}
