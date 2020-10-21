const express = require("express");
const users = require("./routes/users/users");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", users);

app.get("/", (req, res) => {
  res.send("main");
});

app.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}/`);
});
