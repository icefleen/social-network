import avatar from './../images/avatar.jpg';

import emmaAvatar from './../images/emma-avatar.jpg';
import paulAvatar from "./../images/paul-avatar.jpg";
import elenaAvatar from "./../images/elena-avatar.jpg";
import katrinAvatar from "./../images/katrin-avatar.jpg";
import steveAvatar from "./../images/steve-avatar.jpg";
import alexAvatar from "./../images/alex-avatar.jpg";

let state = {
  profile: {
    profilePosts: [
      {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
        avatar: avatar,
        fullName:"Daniil Yandybaev",
        datetime:"49 minutes ago"
      },
      {
        text: "Hello, World!",
        avatar: avatar,
        fullName:"Daniil Yandybaev",
        datetime:"56 minutes ago"
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
    ]
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
        text: "Hi! How old are you?"
      },
      {
        from: "other",
        avatar: emmaAvatar,
        fullName: "Emma Watson",
        text: "Hello :) My name is Emma and i am 18 years old. How are you?"
      }
    ]
  }
};

export default state;