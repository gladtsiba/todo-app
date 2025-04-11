import { Prisma, Posts } from '@prisma/client';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

export class PostMapper {
  static fromCretePostDto(
    dto: CreatePostDto,
  ): Prisma.PostsUncheckedCreateInput {
    return {
      title: dto.title,
      body: dto.body,
      userId: dto.userId,
    };
  }

  static fromUpdatePostDto(
    dto: UpdatePostDto,
  ): Prisma.PostsUncheckedUpdateInput {
    return {
      title: dto.title,
      body: dto.body,
    };
  }

  static toEntity(model: Posts): Post {
    const entity = new Post();
    entity.id = model.id;
    entity.title = model.title;
    entity.userId = model.userId;
    return entity;
  }
}
