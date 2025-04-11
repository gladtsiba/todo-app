import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';
import { PostMapper } from './mappers/post.mapper';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async create(createPostDto: CreatePostDto) {
    const modelData = await this.postRepository.create(
      PostMapper.fromCretePostDto(createPostDto),
    );
    return PostMapper.toEntity(modelData);
  }

  async findAll() {
    return (await this.postRepository.findAll()).map((e) =>
      PostMapper.toEntity(e),
    );
  }

  findOne(id: number) {
    return this.postRepository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(
      id,
      PostMapper.fromUpdatePostDto(updatePostDto),
    );
  }

  remove(id: number) {
    return this.postRepository.remove(id);
  }
}
