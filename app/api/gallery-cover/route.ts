import { NextResponse } from "next/server";
import { getGalleryCover, setGalleryCover } from "@/lib/logic";

export async function GET() {
  const data = await getGalleryCover();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { picUrl } = body;

  if (typeof picUrl !== "string") {
    return NextResponse.json(
      { message: "Invalid picUrl" },
      { status: 400 }
    );
  }

  const data = await setGalleryCover(picUrl);
  return NextResponse.json(data);
}
