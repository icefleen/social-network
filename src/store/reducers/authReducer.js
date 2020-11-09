import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

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

export const getUserData = () => async (dispatch) => {
  const data = await authAPI.getUserData();

  if (data.success) {
    const { userId, email, login } = data.userInfo;
    dispatch(setUserData(userId, email, login, true));
  }
};

export const login = (login, password, remember) => async (dispatch) => {
  const data = await authAPI.login(login, password, remember);

  if (data.success) {
    dispatch(getUserData());
  } else {
    dispatch(stopSubmit("login", { _error: data.message }));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.success) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
