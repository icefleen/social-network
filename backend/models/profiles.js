const users = require("./users");

const profiles = [
  {
    id: 1,
    fullName: "Emma Watson",
    avatar: "/emma-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 1),
    posts: [],
    location: { country: "Russia", city: "Moscow" },
    followed: true,
  },
  {
    id: 2,
    fullName: "Alex Williams",
    avatar: "/alex-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 2),
    posts: [],
    location: { country: "Russia", city: "Saratov" },
    followed: false,
  },
  {
    id: 3,
    fullName: "Elena Cooper",
    avatar: "/elena-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 3),
    posts: [],
    location: { country: "Russia", city: "Saint Petersburg" },
    followed: true,
  },
  {
    id: 4,
    fullName: "Paul Conor",
    avatar: "/paul-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 4),
    posts: [],
    location: { country: "Belarus", city: "Minsk" },
    followed: false,
  },
  {
    id: 5,
    fullName: "Katrin Lee",
    avatar: "/katrin-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 5),
    posts: [],
    location: { country: "Russia", city: "Moscow" },
    followed: false,
  },
  {
    id: 6,
    fullName: "Steve Clark",
    avatar: "/steve-avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 6),
    posts: [],
    location: { country: "Russia", city: "Moscow" },
    followed: true,
  },
  {
    id: 7,
    fullName: "Frontend Hero",
    avatar: null,
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 7),
    posts: [],
    location: { country: "Russia", city: "Saratov" },
    followed: true,
  },
  {
    id: 8,
    fullName: "Daniil Yandybaev",
    avatar: "/avatar.jpg",
    status: "My status will be here",
    birthDate: "25 Jul 2020",
    webSite: "github.com/icefleen",
    education: "SSTU '22",
    friends: users.filter((user) => user.id !== 8),
    posts: [],
    location: { country: "Russia", city: "Saratov" },
    followed: true,
  },
];

module.exports = profiles;
