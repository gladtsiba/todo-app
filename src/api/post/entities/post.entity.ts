import { Prisma } from "@prisma/client";

export class Post {
  createAt: Date;
  updated: Date;
  id: number;
  title: string;
  body: string;
  tx: Prisma.TransactionClient;
  userId: number | null;
}
