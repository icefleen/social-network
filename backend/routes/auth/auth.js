const express = require("express");
const router = express.Router();

router.get("/auth/me", (res, req) => {
  req.json({
    success: true,
    userInfo: { userId: 8, email: "xramirezx@outlook.com", login: "icefleen" },
  });
});

module.exports = router;
