import { NextResponse } from "next/server";
import { getAllWeeklySubmissions } from "@/lib/logic";

export async function GET() {
  const data = await getAllWeeklySubmissions();
  return NextResponse.json(data);
}
