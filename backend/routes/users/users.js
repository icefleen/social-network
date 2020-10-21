const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    fullName: "Emma Watson",
    avatar: "/emma-avatar.jpg",
    location: { country: "Russia", city: "Moscow" },
    followed: true,
  },
  {
    id: 2,
    fullName: "Alex Williams",
    avatar: "/alex-avatar.jpg",
    location: { country: "Russia", city: "Saratov" },
    followed: false,
  },
  {
    id: 3,
    fullName: "Elena Cooper",
    avatar: "/elena-avatar.jpg",
    location: { country: "Russia", city: "Saint Petersburg" },
    followed: true,
  },
  {
    id: 4,
    fullName: "Paul Conor",
    avatar: "/paul-avatar.jpg",
    location: { country: "Belarus", city: "Minsk" },
    followed: false,
  },
  {
    id: 5,
    fullName: "Katrin Lee",
    avatar: "/katrin-avatar.jpg",
    location: { country: "Russia", city: "Moscow" },
    followed: false,
  },
  {
    id: 6,
    fullName: "Steve Clark",
    avatar: "/steve-avatar.jpg",
    location: { country: "Russia", city: "Moscow" },
    followed: true,
  },
  {
    id: 7,
    fullName: "Frontend Hero",
    avatar: null,
    location: { country: "Russia", city: "Saratov" },
    followed: true,
  },
];

router.get("/users", (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = Math.min(parseInt(req.query.limit) || 100, 100);

  res.json({
    items: users.slice(offset, offset + limit),
  });
});

router.post("/users", (req, res) => {});

router.put("/users/:id", (req, res) => {});

router.delete("/users/:id", (req, res) => {});

module.exports = router;
