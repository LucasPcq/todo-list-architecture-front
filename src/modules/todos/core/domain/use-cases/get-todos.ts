import { ITodoRepository } from "@/modules/todos/core/domain";

export const getTodos = (todoRepository: ITodoRepository) => () =>
  todoRepository.fetchTodos();
