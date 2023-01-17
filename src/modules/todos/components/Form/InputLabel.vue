<script lang="ts" setup>
import { labelValidation } from "@/modules/todos/core/utils";

import Input from "@/shared/components/Input.vue";

const emits = defineEmits(["error"]);

const emitError = (event: any) => {
  const labelValue = event.target.value;

  emits("error", labelValidation(labelValue));
};
</script>

<template>
  <Input type="text" @keyup="emitError" v-bind="$attrs" />
</template>

<style lang="stylus" scoped></style>
