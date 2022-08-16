import axios from "axios";

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

export async function getPost() {
  const res = await axios.get(apiUrl);
  return res.data;
}

export async function getDetailPost(id) {
  const res = await axios.get(`${apiUrl}/${id}`);
  return res.data;
}

export async function deletePost(id) {
  const res = await axios.delete(`${apiUrl}/${id}`);
  return res.data;
}
export async function updatePost(payload) {
  const res = await axios.patch(`${apiUrl}/${payload.id}`, payload);
  return res.data;
}
export async function createPost(payload) {
  const res = await axios.post(apiUrl, payload);
  return res.data;
}
