import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interface/todo.model';
import { CreateDtoTodo } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private nextId = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`La tâche avec l'id ${id} n'existe pas`);
    }
    return todo;
  }

  create(createDtoTodo: CreateDtoTodo): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title: createDtoTodo.title,
      description: createDtoTodo.description,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  delete(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException(`La tâche avec l'id ${id} n'existe pas`);
    }
    this.todos.splice(index, 1);
  }
}
