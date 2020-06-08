import produce from "immer";

const INITIAL_STATE = {
  books: [],
};
export default function books(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@book/INSERT_BOOK_SUCCESS":
        draft.books = action.payload.books;
        break;
      case "@book/REMOVE_BOOK_SUCCESS":
        draft.books = action.payload.books;
        break;
      default:
    }
  });
}
