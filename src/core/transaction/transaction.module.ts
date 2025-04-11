import { Module } from '@nestjs/common';
import { TransactionUnitOfWork } from './transaction-unit-of-work';
import { PostModule } from 'src/api/post/post.module';
import { CommentModule } from 'src/api/post/comment/comment.module';

@Module({
  imports: [PostModule, CommentModule],
  providers: [TransactionUnitOfWork],
  exports: [TransactionUnitOfWork]
})
export class TransactionModule {}
