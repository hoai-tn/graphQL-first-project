<script setup>
defineProps({
  isLoading: Boolean,
});
</script>
<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#312c2ce6] bg-opacity-70 z-50"
    v-if="isLoading"
  >
    <span class="loading loading-dots w-[7rem]"></span>
  </div>
</template>
