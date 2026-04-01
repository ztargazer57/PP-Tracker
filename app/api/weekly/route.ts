import { NextResponse } from "next/server";
import { getWeeklySubmissions, postWeeklySubmission } from "@/lib/logic";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const response = await getWeeklySubmissions();
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const hoursSpent = Number(formData.get("hoursSpent"));
  const date = formData.get("date") as string;
  const weekNumber = Number(formData.get("weekNumber"));

  const newImage = formData.get("image");
  const existingImage = formData.get("existingImage");

  let imageToSave = "";
  if (newImage instanceof File && newImage.size > 0 && !(newImage.name === existingImage)) {
    const bytes = await newImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = new Date().toISOString().split("T")[0];
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);

    imageToSave = `/uploads/${fileName}`;
  } else if (typeof existingImage === "string") {
    imageToSave = existingImage;
  }

  const data = await postWeeklySubmission(
    title,
    description,
    hoursSpent,
    date,
    weekNumber,
    imageToSave,
  );
  return NextResponse.json(data);
}
