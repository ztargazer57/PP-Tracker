import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const entries = await prisma.savingsEntry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = entries.reduce((sum, entry) => sum + entry.amount, 0);

    return NextResponse.json({
      total,
      entries,
    });
  } catch (error) {
    console.error("GET /api/savings error:", error);
    return NextResponse.json(
      { error: "Failed to fetch savings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const amount = Number(body.amount);

    if (Number.isNaN(amount)) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const entry = await prisma.savingsEntry.create({
      data: {
        amount,
        note: body.note ?? null,
      },
    });

    const entries = await prisma.savingsEntry.findMany();
    const total = entries.reduce((sum, item) => sum + item.amount, 0);

    return NextResponse.json({
      entry,
      total,
    });
  } catch (error) {
    console.error("POST /api/savings error:", error);
    return NextResponse.json(
      { error: "Failed to save savings entry" },
      { status: 500 }
    );
  }
}
