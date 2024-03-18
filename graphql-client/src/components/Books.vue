<script lang="ts" setup>
import Book from "./Book.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, watchEffect } from "vue";

const BOOK_QUERY = gql`
  query {
    books {
      genre
      name
      id
      author {
        name
        id
      }
    }
  }
`;
const { result } = useQuery(BOOK_QUERY);
const books = computed(() => result.value?.books || []);
</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <Book v-for="book in books" :key="book.id" :book="book" />
    </div>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
