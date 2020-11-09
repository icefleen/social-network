const { default: profileReducer, addPost } = require("./profileReducer");

it("length of posts must be incremented", () => {
  const initialState = {
    isLoading: false,
    status: "",
    friends: [],
    posts: [
      {
        id: 1,
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
        fullName: "Daniil Yandybaev",
        datetime: "56 minutes ago",
      },
      {
        id: 2,
        text: "Hello, World!",
        fullName: "Daniil Yandybaev",
        datetime: "49 minutes ago",
      },
    ],
  };

  const newState = profileReducer(initialState, addPost("Some Text"));

  expect(newState.posts.length).toBe(3);
  expect(newState.posts[newState.posts.length - 1].text).toBe("Some Text");
});

it("last post text must be same", () => {
  const initialState = {
    isLoading: false,
    status: "",
    friends: [],
    posts: [
      {
        id: 1,
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe.",
        fullName: "Daniil Yandybaev",
        datetime: "56 minutes ago",
      },
      {
        id: 2,
        text: "Hello, World!",
        fullName: "Daniil Yandybaev",
        datetime: "49 minutes ago",
      },
    ],
  };

  const newState = profileReducer(initialState, addPost("Some Text"));

  expect(newState.posts[newState.posts.length - 1].text).toBe("Some Text");
});
