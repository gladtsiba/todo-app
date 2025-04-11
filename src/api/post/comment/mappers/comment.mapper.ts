import { Comments, Prisma } from '@prisma/client';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

export class CommentMapper {
  static fromCreateCommentDto(
    dto: CreateCommentDto,
  ): Prisma.CommentsUncheckedCreateInput {
    return {
      name: dto.name,
      email: dto.email,
      body: dto.body,
      postId: dto.postId,
    };
  }

  static fromUpdateCommentDto(
    dto: UpdateCommentDto,
  ): Prisma.CommentsUncheckedUpdateInput {
    return {
      name: dto.name,
      email: dto.email,
      body: dto.body,
    };
  }

  static toEntity(model: Comments): Comment {
    const entity = new Comment();
    entity.id = model.id;
    entity.name = model.name;
    entity.email = model.email;
    entity.body = model.body;
    entity.postId = model.postId;
    return entity;
  }
}
