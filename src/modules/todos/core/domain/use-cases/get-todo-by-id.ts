import { ITodoRepository } from "@/modules/todos/core/domain";

export const getTodoById =
  (todoRepository: ITodoRepository) => async (id: number) => {
    return todoRepository.fetchTodoById(id);
  };
