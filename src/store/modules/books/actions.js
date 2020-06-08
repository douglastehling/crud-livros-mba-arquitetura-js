export function insertBookRequest(data) {
  return {
    type: "@book/INSERT_BOOK_REQUEST",
    payload: { data },
  };
}
export function insertBookSuccess(books) {
  return {
    type: "@book/INSERT_BOOK_SUCCESS",
    payload: { books },
  };
}
export function removeBookRequest(data) {
  return {
    type: "@book/REMOVE_BOOK_REQUEST",
    payload: { data },
  };
}
export function removeBookSuccess(books) {
  return {
    type: "@book/REMOVE_BOOK_SUCCESS",
    payload: { books },
  };
}
