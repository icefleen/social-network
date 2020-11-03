const express = require("express");
const router = express.Router();

router.post("/follow/:id", (res, req) => {
  req.json({
    success: true,
    id: res.params.id,
  });
});

router.delete("/follow/:id", (res, req) => {
  req.json({
    success: true,
    id: res.params.id,
  });
});

module.exports = router;
