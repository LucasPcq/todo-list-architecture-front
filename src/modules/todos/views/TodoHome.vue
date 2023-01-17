<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

import TodoList from "@/modules/todos/components/TodoList/TodoList.vue";
import AddTodo from "@/modules/todos/components/AddTodo.vue";
import NavbarHome from "@/modules/todos/components/NavbarHome/NavbarHome.vue";

import Loading from "@/shared/components/Loading.vue";
import Alert from "@/shared/components/Alert.vue";

import { useTodoStore } from "@/modules/todos/store/todo";

const todoStore = useTodoStore();

const {
  getTodoListSortedByDateAsc,
  getTodoListSortedByDateDesc,
  getLoadingFetchTodos,
} = storeToRefs(todoStore);

const { fetchTodos } = todoStore;

const isSortedAsc = ref<boolean>();

const updateSort = (value: boolean) => {
  isSortedAsc.value = value;
};

const todoListToDisplayFromSort = computed(() => {
  return isSortedAsc.value
    ? getTodoListSortedByDateAsc.value
    : getTodoListSortedByDateDesc.value;
});

onMounted(() => {
  fetchTodos();
});
</script>

<template>
  <div class="container-todo-home">
    <NavbarHome @updateSort="updateSort" />
    <div class="container-todo-list-and-add-todo">
      <Loading v-if="getLoadingFetchTodos" />
      <Alert :isInfo="true" v-else-if="todoListToDisplayFromSort.length < 1"
        >Aucun todo dans la liste !</Alert
      >
      <TodoList
        class="container-todo-list"
        :loading="getLoadingFetchTodos"
        :todos="todoListToDisplayFromSort"
      />
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
