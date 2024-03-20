<script lang="ts" setup>
import Book from "./Book.vue";
import Loading from "./Loading.vue";
import CreateBookForm from "./CreateBookForm.vue";
import useBooks from "@/hooks/useBooks";
import { ref } from "vue";

const modal = ref(null);

const { books, loading, createBook } = useBooks();

const handleSubmit = (form) => {
  createBook(form);
  modal.value.close();
};
</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <Book v-for="book in books" :key="book.id" :book="book" />
      <Loading :isLoading="loading" />
    </div>
    <dialog ref="modal" id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Create Book</h3>
        <div class="modal-action">
          <CreateBookForm @on-submit="handleSubmit" />
        </div>
      </div>
    </dialog>
  </div>
</template>
