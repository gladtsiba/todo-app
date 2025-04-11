import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentRepository } from './comment.repository';
import { DataBaseModule } from 'src/core/databases/database.module';
import { CommentRepositoryFactory } from './factories/comment-repository.factory';
import { DataBaseService } from 'src/core/databases/database.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentRepositoryFactory,
    {
      provide: 'CommentRepository',
      useFactory: (factory: CommentRepositoryFactory, prisma: DataBaseService) =>
        factory.create(prisma),
      inject: [CommentRepositoryFactory, DataBaseService],
    },
    {
      provide: CommentService,
      useFactory: (repo: any) => new CommentService(repo),
      inject: ['CommentRepository'],
    },
  ],
  imports: [DataBaseModule],
  exports: [CommentService, CommentRepositoryFactory],
})
export class CommentModule {}
