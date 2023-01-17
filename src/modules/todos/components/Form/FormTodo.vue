<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { format } from "date-fns";

import InputLabel from "@/modules/todos/components/Form/InputLabel.vue";
import InputEndDate from "@/modules/todos/components/Form/InputEndDate.vue";

import Button from "@/shared/components/Button.vue";

const emits = defineEmits(["submitForm"]);

const props = defineProps<{
  label?: string;
  endDate?: Date;
}>();

const formattedTodayDate = format(new Date(), "yyyy-MM-dd");

const todoForm = reactive({
  label: "",
  endDate: formattedTodayDate,
});

const todoFormError = reactive({
  label: "",
  endDate: "",
});

const formHasError = computed(() => {
  return !!(
    todoFormError.label ||
    todoFormError.endDate ||
    !todoForm.label ||
    !todoForm.endDate
  );
});

const submitForm = () => {
  if (formHasError.value) return;

  emits("submitForm", {
    ...todoForm,
  });

  todoForm.label = "";
  todoForm.endDate = formattedTodayDate;
};

onMounted(() => {
  if (props.label) todoForm.label = props.label;
  if (props.endDate) todoForm.endDate = format(props.endDate, "yyyy-MM-dd");
});
</script>

<template>
  <form class="form-todo" @submit.prevent="submitForm">
    <div class="container-label-todo-input">
      <InputLabel
        v-model="todoForm.label"
        @error="((error: string) => todoFormError.label = error)"
      />
    </div>
    <div class="container-end-date-todo-input">
      <InputEndDate
        v-model="todoForm.endDate"
        :min="formattedTodayDate"
        @error="((error: string) => todoFormError.endDate = error)"
      />
    </div>
    <Button :isBlue="true" :disabled="formHasError">
      <slot></slot>
    </Button>
  </form>
</template>

<style lang="stylus" scoped>
.form-todo
    width 100%
    display flex
    justify-content flex-start
    align-items center
    column-gap 1rem
    .container-label-todo-input
        width 100%
</style>
