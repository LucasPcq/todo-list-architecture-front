<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="stylus">
*
  box-sizing border-box
  margin 0
  padding 0
  font-family $font

html
body
#app
  height 100%

.fade-enter-active
.fade-leave-active
  transition opacity 0.5s ease

.fade-enter-from
.fade-leave-to
  opacity 0
</style>
