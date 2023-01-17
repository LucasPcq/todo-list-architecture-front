<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  isInfo: boolean;
}>();

const alertClassFromType = computed(() => {
  return props.isInfo ? "info-alert" : "error-alert";
});
</script>

<template>
  <div class="alert" :class="alertClassFromType">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
.alert
  margin 1rem 0rem
  padding 1rem
  width 100%
  color white
  text-align center
  text-decoration underline
  text-underline-offset 2px
  border-radius $borderRadius
  box-shadow 0 0 3px $lightGrey

.info-alert
  border-bottom $borderSizeL solid $blue
  background-color $lightBlue

.error-alert
  border-bottom $borderSizeL solid $red
  background-color $lightRed
</style>
