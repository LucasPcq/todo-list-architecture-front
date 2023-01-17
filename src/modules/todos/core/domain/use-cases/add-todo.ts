import { InsertTodoDto, ITodoRepository } from "@/modules/todos/core/domain";

export const addTodo =
  (todoRepository: ITodoRepository) => (insertTodoDto: InsertTodoDto) =>
    todoRepository.insertTodo(insertTodoDto);
