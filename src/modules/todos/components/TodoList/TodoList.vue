<script setup lang="ts">
import { Todo } from "@/modules/todos/core/domain";

import TodoListItem from "./TodoListItem.vue";

const props = defineProps<{
  todos: Todo[];
}>();
</script>

<template>
  <div class="container-todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<style lang="stylus" scoped></style>
