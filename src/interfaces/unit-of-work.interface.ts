import { PostRepository } from "src/api/post/post.repository";
import { CommentRepository } from "src/api/post/comment/comment.repository";

export interface UnitOfWorkContext {
    postRepository: PostRepository;
    commentRepository: CommentRepository;
}
  
export interface UnitOfWork {
    execute<T>(work: (ctx: UnitOfWorkContext) => Promise<T>): Promise<T>;
}
  