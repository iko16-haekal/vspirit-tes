import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...[action.posts]],
      };
    case types.CREATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...[action.payload], ...state.data],
      };
    case types.DELETE_POSTS_SUCCESS:
      const filteredData = state.data.filter((data) => data.id !== action.id);
      return {
        ...state,
        loading: false,
        data: filteredData,
      };
    case types.UPDATE_POSTS_SUCCESS:
      const updatedData = state.data.map((data) =>
        data.id === action.payload.id ? { ...data, ...action.payload } : data
      );
      return {
        ...state,
        loading: false,
        data: updatedData,
      };
    default:
      return state;
  }
}
