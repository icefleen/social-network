export const getIsLogged = (state) => state.auth.isLogged;

export const getIsFetching = (state) => state.auth.isFetching;

export const getUserId = (state) => state.auth.userId;

export const getLogin = (state) => state.auth.login;

export const getEmail = (state) => state.auth.email;

export const getUserInfo = (state) => ({
  isLogged: getIsLogged(state),
  userId: getUserId(state),
  login: getLogin(state),
  email: getEmail(state),
});
