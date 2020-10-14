import avatar from "./../images/avatar.jpg";
import emmaAvatar from "./../images/emma-avatar.jpg";
import paulAvatar from "./../images/paul-avatar.jpg";
import elenaAvatar from "./../images/elena-avatar.jpg";
import katrinAvatar from "./../images/katrin-avatar.jpg";
import steveAvatar from "./../images/steve-avatar.jpg";
import alexAvatar from "./../images/alex-avatar.jpg";

const ADD_MESSAGE = "ADD MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE NEW MESSAGE TEXT";

const initialState = {
  dialogs: [
    {
      penPalId: 1,
      fullname: "Emma Watson",
      avatar: emmaAvatar,
      lastMessage: "Hello :) My name is Emma and I am 18 years old",
    },
    {
      penPalId: 2,
      fullname: "Alex Williams",
      avatar: alexAvatar,
      lastMessage: "Hello :) My name is Alex and I am 18 years old",
    },
    {
      penPalId: 3,
      fullname: "Elena Cooper",
      avatar: elenaAvatar,
      lastMessage: "Hello :) My name is Elena and I am 18 years old",
    },
    {
      penPalId: 4,
      fullname: "Paul Conor",
      avatar: paulAvatar,
      lastMessage: "Hello :) My name is Paul and I am 18 years old",
    },
    {
      penPalId: 5,
      fullname: "Katrin Lee",
      avatar: katrinAvatar,
      lastMessage: "Hello :) My name is Katrin and I am 18 years old",
    },
    {
      penPalId: 6,
      fullname: "Steve Clark",
      avatar: steveAvatar,
      lastMessage: "Hello :) My name is Steve and I am 18 years old",
    },
  ],
  messages: [
    {
      from: "me",
      avatar: avatar,
      fullName: "Daniil Yandybaev",
      text: "Hi! How are you?",
    },
    {
      from: "other",
      avatar: emmaAvatar,
      fullName: "Emma Watson",
      text: "Hi! I'm ok :) I know you? Where are you from?",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      state.messages.push({
        from: "me",
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        text: state.newMessageText,
      });
      state.newMessageText = "";

      return state;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;

      return state;
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText,
});

export default dialogsReducer;
