import { authAPI } from "../api/api";

const SET_USER_DATA = "SET USER DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const getUserData = () => (dispatch) => {
  authAPI.getUserData().then((data) => {
    if (data.success) {
      const { userId, email, login } = data.userInfo;
      dispatch(setUserData(userId, email, login));
    }
  });
}

export default authReducer;
