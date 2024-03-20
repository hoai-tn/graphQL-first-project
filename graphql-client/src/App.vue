<script setup lang="ts">
// watchEffect(() => {
//   });
import Books from "./components/Books.vue";
import Authors from "./components/Authors.vue";
import { ref } from "vue";
const activeTab = ref("books");
</script>
<template>
  <div class="container mx-auto my-10">
    <div role="tablist" class="tabs tabs-bordered">
      <a
        role="tab"
        :class="{ tab: true, 'tab-active': activeTab == 'books' }"
        @click="activeTab = 'books'; router"
        >Books</a
      >
      <a
        role="tab"
        :class="{ tab: true, 'tab-active': activeTab == 'authors' }"
        @click="activeTab = 'authors'"
        >Authors</a
      >
    </div>

    <div
      v-if="activeTab === 'books'"
      class="border-l border-r border-b border-gray-600 p-5"
    >
      <button
        class="btn btn-secondary btn-sm rounded-sm mb-3 mt-2"
        onclick="my_modal_1.showModal()"
      >
        Create book
      </button>

      <Books />
    </div>
    <div
      v-if="activeTab === 'authors'"
      class="border-l border-r border-b border-gray-600 p-5"
    >
      <button
        class="btn btn-secondary btn-sm rounded-sm mb-3 mt-2"
        onclick="my_modal_1.showModal()"
      >
        Create authors
      </button>

      <Authors />
    </div>
  </div>
</template>
<style scoped></style>
