import { call, put, takeLatest } from "redux-saga/effects";
import {
  createPost,
  deletePost,
  getDetailPost,
  updatePost,
} from "../../services/postService";

function* fetchPost(action) {
  const posts = yield call(getDetailPost, action.id);
  yield put({ type: "GET_POSTS_SUCCESS", posts });
}

export function* postSaga() {
  yield takeLatest("POSTS_REQUESTED", fetchPost);
}

function* mutateCreatePost(action) {
  yield call(createPost, action.payload);
  yield put({ type: "CREATE_POSTS_SUCCESS", payload: action.payload });
}

export function* createPostSaga() {
  yield takeLatest("CREATE_POSTS_REQUESTED", mutateCreatePost);
}

function* mutateDeletePost(action) {
  yield call(deletePost, action.id);
  yield put({ type: "DELETE_POSTS_SUCCESS", id: action.id });
}

export function* deletePostSaga() {
  yield takeLatest("DELETE_POSTS_REQUESTED", mutateDeletePost);
}

function* mutateUpdatePost(action) {
  yield call(updatePost, action.payload);
  yield put({ type: "UPDATE_POSTS_SUCCESS", payload: action.payload });
}

export function* updatePostSaga() {
  yield takeLatest("UPDATE_POSTS_REQUESTED", mutateUpdatePost);
}
