<script lang="ts" setup>
import Author from "./Author.vue";
import Loading from "./Loading.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, watchEffect } from "vue";

const AUTHORS_QUERY = gql`
  query getAuthors {
    authors {
      id
      age
      name
    }
  }
`;
const { result, loading } = useQuery(AUTHORS_QUERY);
const authors = computed(() => result.value?.authors || []);
</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <Author v-for="author in authors" :key="author.id" :author="author" />
      <Loading :isLoading="loading" />
    </div>
  </div>
</template>
