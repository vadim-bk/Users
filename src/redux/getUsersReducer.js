import API from "../api";
import { showLoader, hideLoader } from "./appReducers";

const GET_USERS = "GET_USERS";

export const getAllUsers = () => async (dispatch) => {
  dispatch(showLoader());
  const res = await API.getAllUsers();
  const result = res.data;

  setTimeout(() => {
    dispatch({
      type: GET_USERS,
      payload: result,
    });
    dispatch(hideLoader());
  }, 500);
};

const initialState = {
  users: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
