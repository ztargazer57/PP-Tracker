import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
    const result = prisma.dailyRoutine.findMany();
    console.log(result);
}
