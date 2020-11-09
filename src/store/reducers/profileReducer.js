import { profileAPI } from "../../api/api";
import avatar from "../../images/avatar.jpg";

const ADD_POST = "profile/ADD_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const CLEAR_PROFILE = "profile/CLEAR_PROFILE";
const TOGGLE_LOADING = "profile/TOGGLE_LOADING";
const SET_STATUS = "profile/SET_STATUS";

const initialState = {
  isLoading: false,
  status: "",
  friends: [],
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: state.posts.length + 1,
        text: action.postText,
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        datetime: "12 minutes ago",
      };

      return {
        ...state,
        posts: [...state.posts, post],
      };

    case SET_PROFILE:
      return { ...action.profile };

    case CLEAR_PROFILE:
      return initialState;

    case TOGGLE_LOADING:
      return { ...state, isLoading: action.isLoading };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (postText) => ({
  type: ADD_POST,
  postText,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE,
});

export const toggleLoading = (isLoading) => ({
  type: TOGGLE_LOADING,
  isLoading,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getProfile = (userId) => (dispatch) => {
  dispatch(toggleLoading(true));

  profileAPI.getProfile(userId).then((data) => {
    dispatch(setProfile(data));
    dispatch(toggleLoading(false));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.success) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
