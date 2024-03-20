import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
// import getBooks from "../gql/getBooks.gql"
import { ref, watchEffect } from "vue";
export default function useBooks() {
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

  const BOOK_CREATE_QUERY = gql`
    mutation Mutation($authorId: ID!, $name: String, $genre: String) {
      createBook(authorId: $authorId, name: $name, genre: $genre) {
        id
        name
        genre
        author {
          name
          id
        }
      }
    }
  `;
  const { result, loading } = useQuery(BOOK_QUERY);
  const books = ref([]);
  watchEffect(() => {
    if (result.value) {
      // Update the books ref with the result from the query
      books.value = result.value.books || [];
    }
  });
  const { mutate: createBookMutate } = useMutation(BOOK_CREATE_QUERY);

  const createBook = async ({ author, name, genre }) => {
    const { data } = await createBookMutate({
      authorId: author,
      name,
      genre,
    });
    books.value = [...books.value, data.createBook];
  };

  return { books, loading, createBook };
}
