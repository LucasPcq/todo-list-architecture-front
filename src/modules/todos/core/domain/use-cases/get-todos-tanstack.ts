import { ITodoRepository } from "@/modules/todos/core/domain";

export const getTodosTanstack = (todoRepository: ITodoRepository) => () =>
  todoRepository.fetchTodosTanstack();
