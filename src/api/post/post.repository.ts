import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/core/databases/database.service';
import { Prisma } from '@prisma/client';

export class PostRepository {
  constructor(private databaseService: DataBaseService | Prisma.TransactionClient) {}

  async create(data: Prisma.PostsUncheckedCreateInput) {
    const client = this.databaseService;
    return await client.posts.create({ data });
  }

  async findAll() {
    const client = this.databaseService;
    return await client.posts.findMany();
  }

  async findOne(id: number) {
    const client = this.databaseService;
    return await client.posts.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.PostsUncheckedUpdateInput) {
    const client = this.databaseService;
    return await client.posts.update({ where: { id }, data });
  }

  async remove(id: number) {
    const client = this.databaseService;
    return await client.posts.delete({ where: { id } });
  }
}
