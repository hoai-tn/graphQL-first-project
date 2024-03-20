<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, reactive, watchEffect } from "vue";

const AUTHORS_QUERY = gql`
  query getAuthors($isGetAll: Boolean) {
    authors(isGetAll: $isGetAll) {
      id
      age
      name
    }
  }
`;
const state = reactive({ author: "", name: "", genre: "" });
const { result, loading } = useQuery(AUTHORS_QUERY, { isGetAll: true });
const authors = computed(() => result.value?.authors || []);
</script>
<template>
  <form @submit.prevent="$emit('on-submit', state)">
    <input
      v-model="state.name"
      type="text"
      placeholder="Name"
      class="input input-bordered w-full mt-4"
    />
    <input
      v-model="state.genre"
      type="text"
      placeholder="Genre"
      class="input input-bordered w-full mt-4"
    />
    <select class="select select-bordered w-full mt-4" v-model="state.author">
      <option v-for="author in authors" :key="author.id" :value="author.id">
        {{ author.name }}
      </option>
    </select>
    <div class="mt-5 flex justify-between">
      <button class="btn btn-primary" type="submit">Create Book</button>
      <button class="btn btn-secondary" onclick="my_modal_1.close()">
        Close
      </button>
    </div>
  </form>
</template>
