<script setup lang="ts">
import { computed, ref } from "vue";
import { format } from "date-fns";
import { Icon } from "@iconify/vue";

import { Todo } from "@/modules/todos/core/domain";

import { useTodoStore } from "@/modules/todos/store/todo";

import UpdateTodo from "@/modules/todos/components/UpdateTodo.vue";
import Button from "@/shared/components/Button.vue";

const { deleteTodo } = useTodoStore();

const props = defineProps<{
  todo: Todo;
}>();

const editingMode = ref<boolean>(false);

const todoListItemClass = computed(() => {
  return props.todo.isCompleted ? "completed-todo" : "not-completed-todo";
});

const iconUpdateStatusTodo = computed(() =>
  props.todo.isCompleted ? "mdi:circle-off-outline" : "mdi:check-circle"
);

const endDateFormatted = computed(() => {
  return format(props.todo.endDate, "dd/MM/yyyy");
});

const updateTodoStatus = () => {
  // Mettre ici le code pour implementer la mise a jour du isCompleted du todo
};
</script>

<template>
  <div class="todo-list-item" :class="todoListItemClass">
    <div class="item-label-and-date" v-if="!editingMode">
      <div class="item-label" :class="{ 'line-through': todo.isCompleted }">
        {{ todo.label }}
      </div>
      <div class="item-date">{{ endDateFormatted }}</div>
    </div>
    <div class="item-actions" v-if="!editingMode">
      <button
        class="button-with-icon action-update-status-todo"
        @click="updateTodoStatus"
      >
        <Icon :icon="iconUpdateStatusTodo" />
      </button>
      <button
        class="button-with-icon action-update-todo"
        @click="() => (editingMode = !editingMode)"
      >
        <Icon icon="mdi:pencil-box-multiple" />
      </button>
      <button
        class="button-with-icon action-delete-todo"
        @click="deleteTodo(todo.id)"
      >
        <Icon icon="mdi:delete" />
      </button>
    </div>
    <div class="container-form-update-todo" v-if="editingMode">
      <UpdateTodo
        :todo="props.todo"
        @todoUpdated="() => (editingMode = !editingMode)"
      />
      <Button :isGrey="true" @click="() => (editingMode = !editingMode)"
        >Annuler</Button
      >
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.todo-list-item
  display flex
  justify-content space-between
  align-items center
  margin-bottom 1rem
  padding 1rem
  border $borderSizeXS solid $lightGrey
  border-radius $borderRadius
  box-shadow 0 0 3px $lightGrey

.completed-todo
  border-left $borderSizeL solid $lightGreen
  transition all 200ms ease-in


.not-completed-todo
  border-left $borderSizeL solid $lightRed
  transition all 200ms ease-out


.line-through
  text-decoration line-through
  opacity 0.7
  transition all 200ms ease-in-out


.item-date
  font-size 0.8rem
  color #636e72


.item-actions
  display flex
  column-gap 1rem


.button-with-icon
  display flex
  align-items center
  justify-content center
  padding 0.5rem 1rem
  background white
  border none
  border-radius $borderRadius 8px
  transition all 300ms ease-out


.button-with-icon:hover
  cursor pointer
  transform scale(1.1)
  transition all 300ms ease-in


.button-with-icon
  svg
    font-size 1rem


.action-update-status-todo
  background-color $lightGreen
  color white


.action-update-todo
  background-color $lightBlue
  color white


.action-delete-todo
  background-color $lightRed
  color white

.container-form-update-todo
  display flex
  column-gap 1rem
  width 100%


@media only screen and (max-width: 481px)
  .todo-list-item
    flex-direction column
    align-items flex-start
  .item-label-and-date
    margin-bottom 1rem
</style>
