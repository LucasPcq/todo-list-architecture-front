import { ITodoRepository } from "@/modules/todos/core/domain";

export const deleteTodoById =
  (todoRepository: ITodoRepository) => async (id: number) =>
    todoRepository.deleteTodoById(id);
