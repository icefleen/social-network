import avatar from "./../images/avatar.jpg";

const ADD_MESSAGE = "ADD MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE NEW MESSAGE TEXT";

const dialogsReducer = (state, action) => {
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

export default dialogsReducer;
