const express = require("express");
const router = express.Router();

router.put("/status", (res, req) => {
  req.json({
    success: true,
  });
});

module.exports = router;
