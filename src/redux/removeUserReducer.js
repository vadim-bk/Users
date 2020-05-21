import API from "../api";

const REMOVE_USER = "REMOVE_USER";

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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
