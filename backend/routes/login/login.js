const express = require("express");
const router = express.Router();

router.post("/login", (res, req) => {
  req.json({
    success: true,
    userInfo: { userId: 8, email: "xramirezx@outlook.com", login: "icefleen" },
  });
});

router.delete("/login", (res, req) => {
  req.json({
    success: true,
  });
});

module.exports = router;
