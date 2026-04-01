import { PrismaClient } from "@/generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
})

export const prisma = globalForPrisma.prisma ?? new PrismaClient({adapter,});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
