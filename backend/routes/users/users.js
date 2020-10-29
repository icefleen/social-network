const express = require("express");
const router = express.Router();
const users = require("../../models/users");

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
