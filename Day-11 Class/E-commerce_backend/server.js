const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello every one");
});

app.get("/get-users", (req, res) => {
  res.send({
    username: "teja@123",
    password: "admin@123",
    email: "teja@hmail.com",
    phone: 98744561230,
  });
});

app.listen(PORT, () => {
  console.log(`Server  running on port : ${PORT}`);
});
