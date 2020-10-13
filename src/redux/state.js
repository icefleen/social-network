import avatar from './../images/avatar.jpg';
import emmaAvatar from './../images/emma-avatar.jpg';
import paulAvatar from "./../images/paul-avatar.jpg";
import elenaAvatar from "./../images/elena-avatar.jpg";
import katrinAvatar from "./../images/katrin-avatar.jpg";
import steveAvatar from "./../images/steve-avatar.jpg";
import alexAvatar from "./../images/alex-avatar.jpg";

let rerenderEntireTree;

let state = {
  profile: {
    profilePosts: [
      {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
        avatar: avatar,
        fullName:"Daniil Yandybaev",
        datetime:"56 minutes ago"
      },
      {
        text: "Hello, World!",
        avatar: avatar,
        fullName:"Daniil Yandybaev",
        datetime:"49 minutes ago"
      },
    ],
    friends: [
      {
        avatar: emmaAvatar,
        firstName: "Emma",
      },
      {
        avatar: paulAvatar,
        firstName: "Paul",
      },
      {
        avatar: elenaAvatar,
        firstName: "Elena",
      },
      {
        avatar: katrinAvatar,
        firstName: "Katrin",
      },
      {
        avatar: steveAvatar,
        firstName: "Steve",
      },
      {
        avatar: alexAvatar,
        firstName: "Alex",
      }
    ],
    newPostText: "",
  },

  messenger: {
    dialogs: [
      {
        penPalId: 1,
        avatar: emmaAvatar,
        lastMessage: "Hello :) My name is Emma and i am 18 years old"
      },
      {
        penPalId: 2,
        avatar: emmaAvatar,
        lastMessage: "Hello :) My name is Emma and i am 18 years old"
      },
      {
        penPalId: 3,
        avatar: emmaAvatar,
        lastMessage: "Hello :) My name is Emma and i am 18 years old"
      },
      {
        penPalId: 4,
        avatar: emmaAvatar,
        lastMessage: "Hello :) My name is Emma and i am 18 years old"
      },
      {
        penPalId: 5,
        avatar: emmaAvatar,
        lastMessage: "Hello :) My name is Emma and i am 18 years old"
      }
    ],

    messages: [
      {
        from: "me",
        avatar: avatar,
        fullName: "Daniil Yandybaev",
        text: "Hi! How are you?"
      },
      {
        from: "other",
        avatar: emmaAvatar,
        fullName: "Emma Watson",
        text: "Hi! I'm ok :) I know you? Where are you from?"
      }
    ],

    newMessageText: ""
  }
};

export const addPost = () => {
  state.profile.profilePosts.push({
    text: state.profile.newPostText,
    avatar: avatar,
    fullName:"Daniil Yandybaev",
    datetime:"12 minutes ago"
  });
  state.profile.newPostText = "";
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  state.messenger.messages.push({
    from: "me",
    avatar: avatar,
    fullName: "Daniil Yandybaev",
    text: state.messenger.newMessageText
  });
  state.messenger.newMessageText= "";
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
  state.messenger.newMessageText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer)  => {
  rerenderEntireTree = observer;
}

export default state;