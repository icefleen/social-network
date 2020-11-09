import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/reducerHelpers";

const FOLLOW = "people/FOLLOW";
const UNFOLLOW = "people/UNFOLLOW";
const APPEND_PEOPLE = "people/APPEND_PEOPLE";
const CLEAR_PEOPLE = "people/CLEAR_PEOPLE";
const TOGGLE_FETCHING = "people/TOGGLE_FETCHING";
const TOGGLE_FOLLOWING = "people/TOGGLE_FOLLOWING";

const initialState = {
  people: [],
  isFetching: false,
  followingInProgress: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        people: updateObjectInArray(state.people, "id", action.userId, {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        people: updateObjectInArray(state.people, "id", action.userId, {
          followed: false,
        }),
      };

    case APPEND_PEOPLE:
      return { ...state, people: [...state.people, ...action.people] };

    case CLEAR_PEOPLE:
      return { ...state, people: [] };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const appendPeople = (people) => ({
  type: APPEND_PEOPLE,
  people,
});

export const clearPeople = () => ({
  type: CLEAR_PEOPLE,
});

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});

export const toggleFollowing = (isFollowing, userId) => ({
  type: TOGGLE_FOLLOWING,
  isFollowing,
  userId,
});

export const getUsers = (offset) => async (dispatch) => {
  dispatch(toggleFetching(true));

  const data = await usersAPI.getUsers(offset, 3);

  dispatch(toggleFetching(false));
  dispatch(appendPeople(data.items));
};

const followUnFollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowing(true, userId));

  const data = await apiMethod(userId);

  if (data.success) {
    dispatch(actionCreator(userId));
    dispatch(toggleFollowing(false, userId));
  }
};

export const follow = (userId) => (dispatch) => {
  followUnFollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccess
  );
};

export const unFollow = (userId) => (dispatch) => {
  followUnFollowFlow(
    dispatch,
    userId,
    usersAPI.unFollow.bind(usersAPI),
    unFollowSuccess
  );
};

export default peopleReducer;
