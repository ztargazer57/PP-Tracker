import { NextResponse } from "next/server";
import { getDailyRoutineStatus, postDailyRoutineUpdate } from "@/lib/logic";

export async function GET() {
    const data = await getDailyRoutineStatus();
    return NextResponse.json(data);
}
export async function POST(request: Request) {
    const body = await request.json();
    const { field, value } = body;
    const data = await postDailyRoutineUpdate(field,value);
    console.log(value);
    return NextResponse.json(data);
}
