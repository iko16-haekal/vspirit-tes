import * as type from "../types";

export function getPosts(id) {
  return {
    type: type.POSTS_REQUESTED,
    id: id || 1,
  };
}

export function createPosts(payload) {
  return {
    type: type.CREATE_POSTS_REQUESTED,
    payload,
  };
}

export function updatePosts(payload) {
  return {
    type: type.UPDATE_POSTS_REQUESTED,
    payload,
  };
}

export function deletePosts(id) {
  return {
    type: type.DELETE_POSTS_REQUESTED,
    id,
  };
}
