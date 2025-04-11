// comment-repository.factory.ts
import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/core/databases/database.service';
import { CommentRepository } from '../comment.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentRepositoryFactory {
  constructor(private readonly prisma: DataBaseService) {}
  create(tx?: Prisma.TransactionClient): CommentRepository {
    return new CommentRepository(tx ?? this.prisma);
  }
}
