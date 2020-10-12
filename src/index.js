import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import avatar from './images/avatar.jpg';
import emmaAvatar from './images/emma-avatar.jpg';

let posts = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
    avatar: avatar,
    fullname:"Daniil Yandybaev",
    datetime:"49 minutes ago"
  },
  {
    text: "Hello, World!",
    avatar: avatar,
    fullname:"Daniil Yandybaev",
    datetime:"56 minutes ago"
  },
];

let dialogs = [
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
];

let messages = [
  {
    from: "me",
    avatar: avatar,
    fullname: "Daniil Yandybaev",
    text: "Hi! How old are you?"
  },
  {
    from: "other",
    avatar: emmaAvatar,
    fullname: "Emma Watson",
    text: "Hello :) My name is Emma and i am 18 years old. How are you?"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App
      profilePosts={ posts }
      dialogs={ dialogs }
      messages={ messages }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
