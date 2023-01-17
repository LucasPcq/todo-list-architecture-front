import { ITodoRepository } from "@/modules/todos/core/domain";

export const deleteAllTodos = (todoRepository: ITodoRepository) => () =>
  todoRepository.deleteAllTodos();
