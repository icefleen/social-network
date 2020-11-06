import { authAPI } from "../api/api";

const SET_USER_DATA = "SET USER DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isLogged: false,
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

export const setUserData = (userId, email, login, isLogged) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
    isLogged,
  },
});

export const getUserData = () => (dispatch) => {
  authAPI.getUserData().then((data) => {
    if (data.success) {
      const { userId, email, login } = data.userInfo;
      dispatch(setUserData(userId, email, login, true));
    }
  });
};

export const login = (login, password, remember) => (dispatch) => {
  authAPI.login(login, password, remember).then((data) => {
    if (data.success) {
      dispatch(getUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.success) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
