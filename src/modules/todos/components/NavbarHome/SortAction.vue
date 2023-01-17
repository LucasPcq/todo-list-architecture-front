<script lang="ts" setup>
import { ref, watch } from "vue";

const isSortedAsc = ref(true);

const emit = defineEmits(["updateSort"]);

watch(
  isSortedAsc,
  () => {
    emit("updateSort", isSortedAsc.value);
  },
  { immediate: true }
);
</script>

<template>
  <div class="sort-date-container">
    <div class="sort-asc-container">
      <input type="radio" id="asc" :value="true" v-model="isSortedAsc" />
      <label for="asc" :class="{ 'is-checked': isSortedAsc }">ASC</label>
    </div>
    <div class="sort-desc-container">
      <input type="radio" id="desc" :value="false" v-model="isSortedAsc" />
      <label for="desc" :class="{ 'is-checked': !isSortedAsc }">DESC</label>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.sort-date-container
  display flex
  column-gap 0.5rem
  .sort-asc-container
  .sort-desc-container
    input
      display none
    label
      display block
      padding 1rem 2rem
      cursor pointer
      color black
      box-shadow 0 0 3px $lightGrey
      transition all 300ms ease-out
      border-radius $borderRadius
    label.is-checked
      background-color $lightBlue
      color white
      transition all 300ms ease-in
</style>
