import { NextResponse } from "next/server";
import { getDailyRoutineHistory, getDailyRoutineStatus, postDailyRoutineUpdate } from "@/lib/logic";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode");

    if(mode === "today") {
        const data = await getDailyRoutineStatus();
        return NextResponse.json(data);
    }
    const data = await getDailyRoutineHistory();
    return NextResponse.json(data);
}
export async function POST(request: Request) {
    const body = await request.json();
    const { field, value } = body;
    const data = await postDailyRoutineUpdate(field,value);
    console.log(value);
    return NextResponse.json(data);
}
