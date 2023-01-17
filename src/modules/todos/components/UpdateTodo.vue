<script lang="ts" setup>
import { useTodoStore } from "@/modules/todos/store/todo";

import { Todo } from "@/modules/todos/core/domain";

import FormTodo from "@/modules/todos/components/Form/FormTodo.vue";

const { updateTodo } = useTodoStore();

const emits = defineEmits(["todoUpdated"]);

const props = defineProps<{
  todo: Todo;
}>();

const updateCurrentTodo = (values: { label: string; endDate: string }) => {
  updateTodo(props.todo.id, values);
  emits("todoUpdated");
};
</script>

<template>
  <FormTodo
    @submitForm="updateCurrentTodo"
    :label="props.todo.label"
    :endDate="props.todo.endDate"
  >
    Modifier
  </FormTodo>
</template>

<style lang="stylus" scoped>
.container-form-update-todo
  display flex
</style>
