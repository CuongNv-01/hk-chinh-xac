<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in',
      // onBeforeEnter: onBeforeEnter,
      // onAfterEnter: onAfterEnter
    }" />
  </NuxtLayout>
</template>

<script setup lang="ts">
// const onBeforeEnter = () => {
//   // Clean up before new page enters
//   if (typeof window !== 'undefined' && (window as any).$) {
//     const $ = (window as any).$
//     // Ensure footer is properly positioned
//     $('.section-footer').css('position', 'relative')
//   }
// }

// const onAfterEnter = () => {
//   // Fix layout after transition
//   if (typeof window !== 'undefined' && (window as any).$) {
//     const $ = (window as any).$
//     setTimeout(() => {
//       $('.section-footer').css('position', '')
//       $(window).trigger('resize')
//     }, 100)
//   }
// }
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>