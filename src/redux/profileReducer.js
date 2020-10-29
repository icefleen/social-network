import avatar from "./../images/avatar.jpg";

const ADD_POST = "ADD POST";
const UPDATE_NEW_POST_TEXT = "UPDATE NEW POST TEXT";
const SET_PROFILE = "SET PROFILE";
const CLEAR_PROFILE = "CLEAR PROFILE";
const TOGGLE_LOADING = "TOGGLE LOADING";

const initialState = {
  isLoading: false,
  friends: [],
  profilePosts: [
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

  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: 3,
        text: state.newPostText,
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        datetime: "12 minutes ago",
      };

      return {
        ...state,
        profilePosts: [...state.profilePosts, post],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_PROFILE:
      return { ...action.profile };

    case CLEAR_PROFILE:
      return initialState;

    case TOGGLE_LOADING:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
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

export default profileReducer;
