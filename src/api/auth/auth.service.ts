// auth.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { TransactionUnitOfWork } from '../../core/transaction/transaction-unit-of-work';
import { CreatePostDto } from 'src/api/post/dto/create-post.dto';
import { CreateCommentDto } from 'src/api/post/comment/dto/create-comment.dto';

@Injectable()
export class AuthService {
  constructor(private readonly unitOfWork: TransactionUnitOfWork) {}

  async signup() {
    return this.unitOfWork.execute(async (ctx) => {
      const createPostDto: CreatePostDto = {
        title: 'Test',
        body: 'Test',
        userId: 1,
      };
      const newPost = await ctx.postService.create(createPostDto);
      const createCommentDto: CreateCommentDto = {
        name: 'Test',
        email: 'Test',
        body: 'Test',
        postId: newPost.id,
      };
      if(0===0) {
        throw new BadRequestException('Failed to create post');
      }
      
      const newComment = await ctx.commentService.create({
        ...createCommentDto,
        postId: newPost.id,
      });
      return { newPost, newComment };
    });
  }
}
