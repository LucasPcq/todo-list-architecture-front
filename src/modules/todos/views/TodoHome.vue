<script lang="ts" setup>
import { ref } from "vue";

import { useQuery } from "@tanstack/vue-query";

import TodoList from "@/modules/todos/components/TodoList/TodoList.vue";
import AddTodo from "@/modules/todos/components/AddTodo.vue";
import NavbarHome from "@/modules/todos/components/NavbarHome/NavbarHome.vue";

import Loading from "@/shared/components/Loading.vue";
import Alert from "@/shared/components/Alert.vue";

import { todoUseCase } from "@/modules/todos/core/domain";

const { isLoading, isError, data, error } = useQuery({
  queryKey: ["todos"],
  queryFn: todoUseCase.getTodosTanstack,
});

const isSortedAsc = ref<boolean>();

const updateSort = (value: boolean) => {
  isSortedAsc.value = value;
};
</script>

<template>
  <div class="container-todo-home">
    <NavbarHome @updateSort="updateSort" />
    <div class="container-todo-list-and-add-todo">
      <Loading v-if="isLoading" />
      <Alert :is-info="false" v-else-if="isError">{{ error }}</Alert>
      <TodoList v-else-if="data" class="container-todo-list" :todos="data" />
      <AddTodo class="container-add-todo" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container-todo-home
  display flex
  flex-direction column
  height 100%
  padding 1rem
  .container-todo-list-and-add-todo
    height 100%
    display flex
    flex-direction column
    justify-content space-between
</style>
