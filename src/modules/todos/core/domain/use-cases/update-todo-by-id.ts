import { ITodoRepository, UpdateTodoDto } from "@/modules/todos/core/domain";

export const updateTodoById =
  (todoRepository: ITodoRepository) =>
  (id: number, updateTodoDto: UpdateTodoDto) =>
    todoRepository.updateTodoById(id, updateTodoDto);
