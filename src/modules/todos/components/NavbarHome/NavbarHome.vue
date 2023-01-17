<script lang="ts" setup>
import { useTodoStore } from "@/modules/todos/store/todo";

import SortAction from "./SortAction.vue";

import Button from "@/shared/components/Button.vue";

const emit = defineEmits(["updateSort"]);

const todoStore = useTodoStore();

const { deleteAllTodos } = todoStore;
</script>

<template>
  <div class="container-navbar">
    <h1>Todo List</h1>
    <div class="actions-container">
      <SortAction @updateSort="(value) => emit('updateSort', value)" />
      <Button @click="deleteAllTodos" :isRed="true">Tout supprimer</Button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container-navbar
  display flex
  justify-content space-between
  align-items center
  margin-bottom 1rem
.actions-container
  display flex
  justify-content center
  column-gap 1rem
  align-items center
</style>
