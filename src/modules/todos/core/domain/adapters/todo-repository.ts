import { Either, left, right } from "fp-ts/lib/Either";

import {
  Todo,
  FetchTodoDto,
  InsertTodoDto,
  UpdateTodoDto,
} from "@/modules/todos/core/domain";

import {
  mapFetchTodoDtoToTodo,
  mapFetchTodosDtoToTodos,
} from "@/modules/todos/core/utils";

import { IAPIClient } from "@/shared/adapters";

export type ResponseTodo = Promise<Either<string, Todo>>;
export type ResponseTodos = Promise<Either<string, Todo[]>>;
export type ResponseVoid = Promise<Either<string, void>>;

export interface ITodoRepository {
  fetchTodosTanstack: () => Promise<Todo[]>;
  fetchTodos: () => ResponseTodos;
  fetchTodoById: (id: number) => ResponseTodo;
  insertTodo: (insertTodoDto: InsertTodoDto) => ResponseTodo;
  updateTodoById: (id: number, updateTodoDto: UpdateTodoDto) => ResponseTodo;
  deleteTodoById: (id: number) => ResponseVoid;
  deleteAllTodos: () => ResponseVoid;
}

export const todoRepository = (http: IAPIClient): ITodoRepository => ({
  fetchTodosTanstack: async (): Promise<Todo[]> => {
    try {
      const data = await http.get<FetchTodoDto[]>("todos");
      return mapFetchTodosDtoToTodos(data);
    } catch (error: any) {
      throw error;
    }
  },
  fetchTodos: async (): ResponseTodos => {
    try {
      const data = await http.get<FetchTodoDto[]>("todos");
      return right(mapFetchTodosDtoToTodos(data));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
  fetchTodoById: async (id: number): ResponseTodo => {
    try {
      const data = await http.get<FetchTodoDto>(`todos/${id}`);
      return right(mapFetchTodoDtoToTodo(data));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
  insertTodo: async (insertTodoDto: InsertTodoDto): ResponseTodo => {
    try {
      const data = await http.post<FetchTodoDto>(`todos`, insertTodoDto);
      return right(mapFetchTodoDtoToTodo(data));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
  updateTodoById: async (
    id: number,
    updateTodoDto: UpdateTodoDto
  ): ResponseTodo => {
    try {
      const data = await http.patch<FetchTodoDto>(`todos/${id}`, updateTodoDto);
      return right(mapFetchTodoDtoToTodo(data));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
  deleteTodoById: async (id: number): ResponseVoid => {
    try {
      return right(await http.delete(`todos/${id}`));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
  deleteAllTodos: async (): ResponseVoid => {
    try {
      return right(await http.delete(`todos`));
    } catch (error: any) {
      // TODO: Gestion d'erreur
      return left(error.message);
    }
  },
});
