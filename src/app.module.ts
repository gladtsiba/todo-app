import { Module } from '@nestjs/common';
import { CommentModule } from './api/post/comment/comment.module';
import { PostModule } from './api/post/post.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TransactionModule } from './core/transaction/transaction.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [TodosModule, PostModule, CommentModule, TransactionModule, AuthModule],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
