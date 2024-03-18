<script setup lang="ts">
// watchEffect(() => {
//   });
import Books from "@/components/Books.vue";
</script>
<template>
  <div class="container mx-auto my-10">
    <button class="btn btn-secondary btn-sm rounded-sm mb-3"  onclick="my_modal_1.showModal()">
      Create book
    </button>
    <Books />
  </div>
</template>
<style scoped></style>
