import avatar from "./../images/avatar.jpg";
import emmaAvatar from "./../images/emma-avatar.jpg";
import paulAvatar from "./../images/paul-avatar.jpg";
import elenaAvatar from "./../images/elena-avatar.jpg";
import katrinAvatar from "./../images/katrin-avatar.jpg";
import steveAvatar from "./../images/steve-avatar.jpg";
import alexAvatar from "./../images/alex-avatar.jpg";

const ADD_POST = "ADD POST";
const UPDATE_NEW_POST_TEXT = "UPDATE NEW POST TEXT";

const initialState = {
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

  friends: [
    {
      id: 1,
      avatar: emmaAvatar,
      firstName: "Emma",
    },
    {
      id: 2,
      avatar: paulAvatar,
      firstName: "Paul",
    },
    {
      id: 3,
      avatar: elenaAvatar,
      firstName: "Elena",
    },
    {
      id: 4,
      avatar: katrinAvatar,
      firstName: "Katrin",
    },
    {
      id: 5,
      avatar: steveAvatar,
      firstName: "Steve",
    },
    {
      id: 6,
      avatar: alexAvatar,
      firstName: "Alex",
    },
  ],

  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
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
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export default profileReducer;
