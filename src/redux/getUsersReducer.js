import API from "../api";

const GET_USERS = "GET_USERS";

export const getAllUsers = () => async (dispatch) => {
  const res = await API.getAllUsers();
  const result = res.data;

  dispatch({
    type: GET_USERS,
    payload: result,
  });
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
