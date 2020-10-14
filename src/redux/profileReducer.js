import avatar from "./../images/avatar.jpg";

const ADD_POST = "ADD POST";
const UPDATE_NEW_POST_TEXT = "UPDATE NEW POST TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.profilePosts.push({
        text: state.newPostText,
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        datetime: "12 minutes ago",
      });

      state.newPostText = "";

      return state;
    }

    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;

      return state;
    }

    default:
      return state;
  }
};

export default profileReducer;
