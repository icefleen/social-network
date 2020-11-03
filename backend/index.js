const express = require("express");
const users = require("./routes/users/users");
const profile = require("./routes/profile/profile");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", users);
app.use("/api", profile);
app.use("/api", require("./routes/auth/auth"));

app.get("/", (req, res) => {
  res.send("main");
});

app.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}/`);
});
