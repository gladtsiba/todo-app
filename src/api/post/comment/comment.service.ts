import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentMapper } from './mappers/comment.mapper';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto) {
   
    const modelData = await this.commentRepository.create(
      CommentMapper.fromCreateCommentDto(createCommentDto),
    );
    return modelData && CommentMapper.toEntity(modelData);
  }

  async findAll() {
    return (await this.commentRepository.findAll()).map((e) =>
      CommentMapper.toEntity(e),
    );
  }

  findOne(id: number) {
    return this.commentRepository.findOne(id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(
      CommentMapper.fromUpdateCommentDto(updateCommentDto),
      id,
    );
  }

  remove(id: number) {
    return this.commentRepository.remove(id);
  }
}
