import { takeLatest, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import { insertBookSuccess, removeBookSuccess } from "./actions";

export function* insertBook({ payload }) {
  const { books } = !!localStorage.getItem("persist:eventSystem")
    ? JSON.parse(
        JSON.parse(localStorage.getItem("persist:eventSystem"))["books"]
      )
    : [];

  const { titulo, autor, editora, area } = payload.data;

  const obj = books;
  const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;

  obj.push({ id, titulo, autor, editora, area });

  toast.success("Livro criado com sucesso");

  yield put(insertBookSuccess(obj));
}

export function* removeBook({ payload }) {
  const id = payload.data;

  const { books } = !!localStorage.getItem("persist:eventSystem")
    ? JSON.parse(
        JSON.parse(localStorage.getItem("persist:eventSystem"))["books"]
      )
    : [];

  const obj = books.filter((x) => x.id !== id);

  toast.success("Livro removido com sucesso");

  yield put(removeBookSuccess(obj));
}

export default all([
  takeLatest("@book/INSERT_BOOK_REQUEST", insertBook),
  takeLatest("@book/REMOVE_BOOK_REQUEST", removeBook),
]);
