import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interface/todo.model';
import { CreateDtoTodo } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Todo {
    return this.todosService.findOne(id);
  }

  @Post()
  create(
    @Body() createDtoTodo: CreateDtoTodo,
    @Query('name') name: string,
  ): Todo {
    console.log(name);
    return this.todosService.create(createDtoTodo);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    return this.todosService.delete(id);
  }
}
