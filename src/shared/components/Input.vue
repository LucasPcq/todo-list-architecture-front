<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  modelValue?: string;
}>();

const updateModelValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input v-bind="$attrs" :value="props.modelValue" @input="updateModelValue" />
</template>

<style lang="stylus" scoped>
input
    display block
    width 100%
    border $borderSizeXs solid $lightGrey
    padding 1rem
    border-radius $borderRadius
    box-sizing border-box
</style>
