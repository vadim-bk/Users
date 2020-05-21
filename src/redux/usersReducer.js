import API from "../api";
import { showLoader, hideLoader } from "./appReducer";

const CREATE_USER = "CREATE_USER";
const EDIT_USER = "EDIT_USER";
const GET_SELECTED = "GET_SELECTED";
const GET_USERS = "GET_USERS";
const REMOVE_USER = "REMOVE_USER";

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

export const createUser = (data) => async (dispatch) => {
  await API.createUser(data);

  dispatch({ type: CREATE_USER });
};

export const getSelectedUser = (id) => async (dispatch) => {
  dispatch(showLoader());

  const res = await API.getSelectedUser(id);
  const result = res.data;

  setTimeout(() => {
    dispatch({
      type: GET_SELECTED,
      payload: result,
    });

    dispatch(hideLoader());
  }, 500);
};

export const editUser = (id, data) => async (dispatch) => {
  const res = await API.editUser(id, data);
  const result = res.data;

  dispatch({
    type: EDIT_USER,
    payload: result,
  });
};

export const removeUser = (id) => async (dispatch) => {
  const res = await API.removeUser(id);
  const result = res.data;

  dispatch({
    type: REMOVE_USER,
    payload: result,
  });
};

const initialState = {
  users: [],
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };

    case CREATE_USER:
      return { ...state };

    case GET_SELECTED:
      return { ...state, user: payload };

    case EDIT_USER:
      return { ...state, user: payload };

    case REMOVE_USER:
      return { ...state, users: payload };

    default:
      return state;
  }
};
