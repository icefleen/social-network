const express = require("express");
const router = express.Router();
const profiles = require("../../models/profiles");

router.use("/profile/:id", (res, req) => {
  req.json(profiles.find((profile) => profile.id === parseInt(res.params.id)));
});

module.exports = router;
