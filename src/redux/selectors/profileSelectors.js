import { createSelector } from "reselect";

export const getIsLoading = (state) => state.profileState.isLoading;

export const getAvatar = (state) => state.profileState.avatar;

export const getFullName = (state) => state.profileState.fullName;

export const getStatus = (state) => state.profileState.status;

export const getFriends = (state) => state.profileState.friends;

const getPosts = (state) => state.profileState.posts;

export const getPostsReversed = createSelector(getPosts, (posts) =>
  [...posts].reverse()
);
