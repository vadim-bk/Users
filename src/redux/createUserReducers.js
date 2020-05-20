import API from "../api";

const CREATE_USER = "CREATE_USER";

export const createUser = (data) => async (dispatch) => {
  const res = await API.createUser(data);
  const result = res.data;

  dispatch({
    type: CREATE_USER,
    payload: result,
  });
};

const initialState = {
  users: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return { ...state, users: payload };

    default:
      return state;
  }
};
