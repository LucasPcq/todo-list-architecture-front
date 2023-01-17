import { defineStore } from "pinia";

import { match } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

import {
  Todo,
  todoUseCase,
  InsertTodoDto,
  UpdateTodoDto,
} from "@/modules/todos/core/domain";

interface State {
  todoList: Todo[];
  todoFetched: Todo;
  error: string;
  loadingFetchTodos: boolean;
  loadingFetchTodo: boolean;
}

export const useTodoStore = defineStore("todo", {
  state: (): State => {
    return {
      todoList: [],
      todoFetched: {} as Todo,
      error: "",
      loadingFetchTodos: false,
      loadingFetchTodo: false,
    };
  },
  getters: {
    getTodoList: (state: State) => state.todoList,
    getTodoListSortedByDateAsc: (state: State) =>
      state.todoList.slice().sort((a, b) => {
        return a.endDate.valueOf() - b.endDate.valueOf();
      }),
    getTodoListSortedByDateDesc: (state: State) =>
      state.todoList.slice().sort((a, b) => {
        return b.endDate.valueOf() - a.endDate.valueOf();
      }),
    getTodoFetched: (state: State) => state.todoFetched,
    getLoadingFetchTodos: (state: State) => state.loadingFetchTodos,
    getLoadingFetchTodo: (state: State) => state.loadingFetchTodo,
    getError: (state: State) => state.error,
  },
  actions: {
    // TODO: Mutualiser les erreurs des actions
    async fetchTodos() {
      this.$patch(
        (state) => ((state.error = ""), (state.loadingFetchTodos = true))
      );

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchTodos = (todos: Todo[]) => {
        this.$patch((state) => {
          state.todoList = todos;
        });
      };

      return pipe(
        await todoUseCase.getTodos(),
        match(matchError, matchTodos),
        () => {
          this.$patch((state) => {
            state.loadingFetchTodos = false;
          });
        }
      );
    },
    async fetchTodo(id: number) {
      this.$patch(
        (state) => ((state.error = ""), (state.loadingFetchTodo = true))
      );

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchTodoFetched = (todoFetched: Todo) => {
        this.$patch((state) => {
          state.todoFetched = todoFetched;
        });
      };

      return pipe(
        await todoUseCase.getTodoById(id),
        match(matchError, matchTodoFetched),
        () => {
          this.$patch((state) => {
            state.loadingFetchTodo = false;
          });
        }
      );
    },
    async addTodo(insertTodoDto: InsertTodoDto) {
      this.$patch((state) => (state.error = ""));

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchTodoInserted = (todoInserted: Todo) => {
        this.$patch((state) => {
          state.todoList.push(todoInserted);
        });
      };

      return pipe(
        await todoUseCase.addTodo(insertTodoDto),
        match(matchError, matchTodoInserted)
      );
    },
    async updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
      this.$patch((state) => (state.error = ""));

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchTodoUpdated = (todoUpdated: Todo) => {
        const todoToUpdateIndex = this.todoList.findIndex(
          (todo) => todo.id === id
        );
        this.$patch((state) => {
          state.todoList.splice(todoToUpdateIndex, 1, todoUpdated);
        });
      };

      return pipe(
        await todoUseCase.updateTodoById(id, updateTodoDto),
        match(matchError, matchTodoUpdated)
      );
    },
    async deleteTodo(id: number) {
      this.$patch((state) => (state.error = ""));

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchTodoDeleted = () => {
        const todoToDeleteIndex = this.todoList.findIndex(
          (todo) => todo.id === id
        );
        this.$patch((state) => {
          state.todoList.splice(todoToDeleteIndex, 1);
        });
      };

      return pipe(
        await todoUseCase.deleteTodoById(id),
        match(matchError, matchTodoDeleted)
      );
    },
    async deleteAllTodos() {
      this.$patch((state) => (state.error = ""));

      const matchError = (error: string) => {
        this.$patch((state) => {
          state.error = error;
        });
      };

      const matchAllTodosDeleted = () => {
        this.$patch((state) => {
          state.todoList = [];
        });
      };

      return pipe(
        await todoUseCase.deleteAllTodos(),
        match(matchError, matchAllTodosDeleted)
      );
    },
  },
});
