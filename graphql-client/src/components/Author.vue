<script lang="ts" setup>
const props = defineProps({
  author: Object,
});
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body p-4">
      <h2 class="card-title">{{ author.name }}</h2>
      <p>{{ author.age }}</p>
      <div class="card-actions justify-between">
        <button class="btn btn-primary btn-sm rounded-sm">Buy Now</button>
        <button class="btn btn-primary btn-sm rounded-sm">Modify</button>
      </div>
    </div>
  </div>
</template>
