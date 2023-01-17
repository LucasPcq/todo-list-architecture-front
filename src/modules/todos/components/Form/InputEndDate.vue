<script lang="ts" setup>
import { endDateValidation } from "@/modules/todos/core/utils";

import Input from "@/shared/components/Input.vue";

const emits = defineEmits(["error"]);

const emitError = (event: any) => {
  const endDateValue = event.target.value;

  emits("error", endDateValidation(endDateValue));
};
</script>

<template>
  <Input type="date" v-bind="$attrs" @change="emitError" />
</template>

<style lang="stylus" scoped></style>
