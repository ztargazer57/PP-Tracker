import { postNotes, fetchNotes } from "@/lib/logic";
import { NextResponse } from "next/server";


export async function GET() {
    const response = await fetchNotes();
    return NextResponse.json(response);

}

export async function POST(request) {
    const notes = await request.json();
    const data = await postNotes(notes);
    return NextResponse.json(data);
}
