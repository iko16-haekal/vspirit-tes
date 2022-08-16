import { all } from "redux-saga/effects";
import {
  createPostSaga,
  deletePostSaga,
  postSaga,
  updatePostSaga,
} from "./postSaga";

export default function* rootSaga() {
  yield all([postSaga(), createPostSaga(), deletePostSaga(), updatePostSaga()]);
}
