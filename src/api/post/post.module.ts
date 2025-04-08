import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CommentModule } from './comment/comment.module';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [CommentModule],
})
export class PostModule {}
