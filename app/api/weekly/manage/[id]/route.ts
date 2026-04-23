import { NextResponse } from "next/server";
import { updateWeeklySubmissionById } from "@/lib/logic";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    if (Number.isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid weekly submission id." },
        { status: 400 },
      );
    }

    const body = await request.json();

    const title = String(body.title ?? "");
    const description = String(body.description ?? "");
    const hoursSpent = Number(body.hoursSpent ?? 0);
    const date = String(body.date ?? "");
    const image = String(body.image ?? "");

    const data = await updateWeeklySubmissionById(numericId, {
      title,
      description,
      hoursSpent,
      date,
      image,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to update weekly submission:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to update weekly submission.",
      },
      { status: 500 },
    );
  }
}
