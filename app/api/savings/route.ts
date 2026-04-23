import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const USER_ID = 1;
const MAX_LOGS = 30;

export async function GET() {
  try {
    const [user, entries] = await prisma.$transaction([
      prisma.user.findUnique({
        where: { id: USER_ID },
        select: { savingsTotal: true },
      }),
      prisma.savingsEntry.findMany({
        orderBy: { createdAt: "desc" },
        take: MAX_LOGS,
      }),
    ]);

    return NextResponse.json({
      total: Number(user?.savingsTotal ?? 0),
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
    const note =
      typeof body.note === "string" && body.note.trim()
        ? body.note.trim()
        : null;

    if (Number.isNaN(amount)) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const entry = await tx.savingsEntry.create({
        data: {
          amount,
          note,
        },
      });

      const user = await tx.user.update({
        where: { id: USER_ID },
        data: {
          savingsTotal: {
            increment: amount,
          },
        },
        select: {
          savingsTotal: true,
        },
      });

      const oldEntries = await tx.savingsEntry.findMany({
        orderBy: { createdAt: "desc" },
        skip: MAX_LOGS,
        select: { id: true },
      });

      if (oldEntries.length > 0) {
        await tx.savingsEntry.deleteMany({
          where: {
            id: {
              in: oldEntries.map((item) => item.id),
            },
          },
        });
      }

      const latestEntries = await tx.savingsEntry.findMany({
        orderBy: { createdAt: "desc" },
        take: MAX_LOGS,
      });

      return {
        entry,
        total: Number(user.savingsTotal ?? 0),
        entries: latestEntries,
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("POST /api/savings error:", error);
    return NextResponse.json(
      { error: "Failed to save savings entry" },
      { status: 500 }
    );
  }
}
