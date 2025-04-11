import { Prisma } from "@prisma/client";

export class Comment {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  name: string;
  email: string;
  body: string;
  tx?: Prisma.TransactionClient;
  postId: number;
}
