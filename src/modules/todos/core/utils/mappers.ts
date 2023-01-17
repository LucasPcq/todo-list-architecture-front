import { Todo, FetchTodoDto } from "@/modules/todos/core/domain";

export const mapFetchTodoDtoToTodo = (todo: FetchTodoDto): Todo => {
  return {
    id: todo.id,
    label: todo.title,
    isCompleted: todo.completed,
    endDate: new Date(todo.end_date),
    insertedDate: new Date(todo.created_at),
  };
};

export const mapFetchTodosDtoToTodos = (todos: FetchTodoDto[]): Todo[] => {
  return todos.map((todo) => mapFetchTodoDtoToTodo(todo));
};
