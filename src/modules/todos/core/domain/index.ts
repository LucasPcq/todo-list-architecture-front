import { Todo } from "./Todo";

import { FetchTodoDto } from "./dto/fetch-todo.dto";
import { InsertTodoDto } from "./dto/insert-todo.dto";

import { getTodos } from "./use-cases/get-todos";
import { getTodoById } from "./use-cases/get-todo-by-id";
import { addTodo } from "./use-cases/add-todo";
import { deleteTodoById } from "./use-cases/delete-todo-by-id";
import { deleteAllTodos } from "./use-cases/delete-all-todos";

import {
  ITodoRepository,
  ResponseTodo,
  ResponseTodos,
  ResponseVoid,
  todoRepository,
} from "./adapters/todo-repository";

import { axiosClient } from "@/shared/adapters";
import { config } from "@/shared/config";

/* REPOSITORY & USE CASES */

const repository = todoRepository(axiosClient(config.apiUrl));

export interface ITodoUseCase {
  getTodos: () => ResponseTodos;
  getTodoById: (id: number) => ResponseTodo;
  addTodo: (insertTodoDto: InsertTodoDto) => ResponseTodo;
  deleteTodoById: (id: number) => ResponseVoid;
  deleteAllTodos: () => ResponseVoid;
}

export const todoUseCase: ITodoUseCase = {
  getTodos: getTodos(repository),
  getTodoById: getTodoById(repository),
  addTodo: addTodo(repository),
  deleteTodoById: deleteTodoById(repository),
  deleteAllTodos: deleteAllTodos(repository),
};

/* EXPORT DOMAIN */

export type { Todo, ITodoRepository, FetchTodoDto, InsertTodoDto };
