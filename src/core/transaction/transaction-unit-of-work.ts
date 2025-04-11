// prisma-unit-of-work.ts
import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/core/databases/database.service';
import { PostRepositoryFactory } from 'src/api/post/post-repository.factory';
import { Prisma } from '@prisma/client';
import { UnitOfWork, UnitOfWorkContext } from 'src/interfaces/unit-of-work.interface';
import { CommentRepositoryFactory } from 'src/api/post/comment/factories/comment-repository.factory';
import { PostService } from 'src/api/post/post.service';
import { CommentService } from 'src/api/post/comment/comment.service';

// src/unit-of-work/prisma.unit-of-work.ts
@Injectable()
export class TransactionUnitOfWork {
  constructor(
    private readonly prisma: DataBaseService,
    private readonly postRepositoryFactory: PostRepositoryFactory,
    private readonly commentRepositoryFactory: CommentRepositoryFactory,
  ) {}

  async execute<T>(
    work: (ctx: {
      postService: PostService,
      commentService: CommentService,
    }) => Promise<T>
  ): Promise<T> {
    return this.prisma.$transaction(async (tx) => {
      const postRepo = this.postRepositoryFactory.create(tx);
      const commentRepo = this.commentRepositoryFactory.create(tx);
      const postService = new PostService(postRepo);
      const commentService = new CommentService(commentRepo);

      return work({ postService, commentService });
    });
  }
}
