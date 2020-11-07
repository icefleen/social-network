import avatar from "../../images/avatar.jpg";
import emmaAvatar from "../../images/emma-avatar.jpg";
import paulAvatar from "../../images/paul-avatar.jpg";
import elenaAvatar from "../../images/elena-avatar.jpg";
import katrinAvatar from "../../images/katrin-avatar.jpg";
import steveAvatar from "../../images/steve-avatar.jpg";
import alexAvatar from "../../images/alex-avatar.jpg";

const ADD_MESSAGE = "ADD MESSAGE";

const initialState = {
  dialogs: [
    {
      id: 1,
      fullName: "Emma Watson",
      avatar: emmaAvatar,
      lastMessage: "Hello :) My name is Emma and I am 18 years old",
    },
    {
      id: 2,
      fullName: "Alex Williams",
      avatar: alexAvatar,
      lastMessage: "Hello :) My name is Alex and I am 18 years old",
    },
    {
      id: 3,
      fullName: "Elena Cooper",
      avatar: elenaAvatar,
      lastMessage: "Hello :) My name is Elena and I am 18 years old",
    },
    {
      id: 4,
      fullName: "Paul Conor",
      avatar: paulAvatar,
      lastMessage: "Hello :) My name is Paul and I am 18 years old",
    },
    {
      id: 5,
      fullName: "Katrin Lee",
      avatar: katrinAvatar,
      lastMessage: "Hello :) My name is Katrin and I am 18 years old",
    },
    {
      id: 6,
      fullName: "Steve Clark",
      avatar: steveAvatar,
      lastMessage: "Hello :) My name is Steve and I am 18 years old",
    },
  ],
  messages: [
    {
      id: 1,
      from: "me",
      avatar: avatar,
      fullName: "Daniil Yandybaev",
      text: "Hi! How are you?",
    },
    {
      id: 2,
      from: "other",
      avatar: emmaAvatar,
      fullName: "Emma Watson",
      text: "Hi! I'm ok :) I know you? Where are you from?",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = {
        id: state.messages.length + 1,
        from: "me",
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        text: action.messageText,
      };

      return {
        ...state,
        messages: [...state.messages, message],
      };

    default:
      return state;
  }
};

export const addMessage = (messageText) => ({
  type: ADD_MESSAGE,
  messageText,
});

export default dialogsReducer;
