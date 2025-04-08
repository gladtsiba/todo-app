import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PostModule } from './api/post/post.module';


@Module({
  imports: [TodosModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
