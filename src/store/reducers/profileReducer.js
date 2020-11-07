import { profileAPI } from "../../api/api";
import avatar from "../../images/avatar.jpg";

const ADD_POST = "ADD POST";
const SET_PROFILE = "SET PROFILE";
const CLEAR_PROFILE = "CLEAR PROFILE";
const TOGGLE_LOADING = "TOGGLE LOADING";
const SET_STATUS = "SET STATUS";

const initialState = {
  isLoading: false,
  status: "",
  friends: [],
  posts: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
      avatar: avatar,
      fullName: "Daniil Yandybaev",
      datetime: "56 minutes ago",
    },
    {
      id: 2,
      text: "Hello, World!",
      avatar: avatar,
      fullName: "Daniil Yandybaev",
      datetime: "49 minutes ago",
    },
  ],
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
