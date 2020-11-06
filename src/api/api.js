import * as axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {},
});

export const authAPI = {
  getUserData: () => instance.get("/auth/me").then((response) => response.data),
  login: (login, password, remember) =>
    instance
      .post("/login", { login, password, remember })
      .then((response) => response.data),
  logout: () => instance.delete("/login").then((response) => response.data),
};

export const usersAPI = {
  getUsers: (offset, count = 50) =>
    instance
      .get(`/users?offset=${offset}&limit=${count}`)
      .then((response) => response.data),

  follow: (userId) =>
    instance.post(`/follow/${userId}`).then((response) => response.data),

  unFollow: (userId) =>
    instance.delete(`/follow/${userId}`).then((response) => response.data),
};

export const profileAPI = {
  getProfile: (userId) =>
    instance.get(`/profile/${userId}`).then((response) => response.data),

  updateStatus: (status) =>
    instance
      .put(`/status`, {
        status: status,
      })
      .then((response) => response.data),
};
