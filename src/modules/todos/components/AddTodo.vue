<script lang="ts" setup>
import { useTodoStore } from "@/modules/todos/store/todo";

import FormTodo from "@/modules/todos/components/Form/FormTodo.vue";

const { addTodo } = useTodoStore();

const addNewTodo = (values: { label: string; endDate: string }) => {
  addTodo(values);
};
</script>

<template>
  <FormTodo @submitForm="addNewTodo"> Ajouter </FormTodo>
</template>

<style lang="stylus" scoped></style>
