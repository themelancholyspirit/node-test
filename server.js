const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  res.send({
    users: [
      { name: "Guga", age: 21, occupation: "Computer Science" },
      { name: "David", age: 21, occupation: "Medicine" },
    ],
  });
});

app.listen(port, console.log("server is running"));
