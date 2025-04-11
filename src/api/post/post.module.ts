import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DataBaseModule } from 'src/core/databases/database.module';
import { PostRepositoryFactory } from './post-repository.factory';
import { DataBaseService } from 'src/core/databases/database.service';

@Module({
  controllers: [PostController],
  providers: [PostService,  PostRepositoryFactory,
    {
      provide: 'PostRepository',
      useFactory: (factory: PostRepositoryFactory, prisma: DataBaseService) =>
        factory.create(prisma),
      inject: [PostRepositoryFactory, DataBaseService],
    },
    {
      provide: PostService,
      useFactory: (repo: any) => new PostService(repo),
      inject: ['PostRepository'],
    },
  ],
  imports: [DataBaseModule],
  exports: [PostService, PostRepositoryFactory],
})
export class PostModule {}
