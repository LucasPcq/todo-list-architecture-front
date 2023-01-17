<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  isBlue?: boolean;
  isRed?: boolean;
  isGrey?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isBlue: false,
  isRed: false,
  isGrey: false,
});

const buttonClassFromType = computed(() => {
  return {
    "blue-button": props.isBlue,
    "red-button": props.isRed,
    "grey-button": props.isGrey,
  };
});
</script>

<template>
  <button class="default-button" :class="buttonClassFromType" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style lang="stylus" scoped>

.default-button
  width fit-content
  padding 1rem 2rem
  border-radius $borderRadius
  border none
  color white
  font-size 1rem
  cursor pointer
  transition all 300ms ease-out

.default-button:hover
  transform scale(1.1)
  transition all 300ms ease-in

.default-button:disabled
  transform scale(1)
  background-color $lightGrey
  cursor not-allowed

.blue-button
  background-color $lightBlue

.red-button
  background-color $lightRed

.grey-button
  background-color $grey
</style>
