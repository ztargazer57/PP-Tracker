import { NextResponse } from "next/server";
import { getWeeklySubmissions, postWeeklySubmission } from "@/lib/logic";

export async function GET() {
  try {
    const response = await getWeeklySubmissions();
    return NextResponse.json(response);
  } catch (error) {
    console.error("Failed to get weekly submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch weekly submission." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = String(formData.get("title") ?? "");
    const description = String(formData.get("description") ?? "");
    const hoursSpent = Number(formData.get("hoursSpent") ?? 0);
    const date = String(formData.get("date") ?? "");
    const weekNumber = Number(formData.get("weekNumber") ?? 0);

    // This is now expected to be a Cloudinary URL string
    const image = String(formData.get("image") ?? "");

    const data = await postWeeklySubmission(
      title,
      description,
      hoursSpent,
      date,
      weekNumber,
      image
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to save weekly submission:", error);
    return NextResponse.json(
      { error: "Failed to save weekly submission." },
      { status: 500 }
    );
  }
}
