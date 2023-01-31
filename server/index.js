const express = require("express");

const app = express();
// middleware
app.use(express.json());

// get
// localhost:3000/
app.get("/", (req, res) => {
  console.log("getting request");
  res.send("hello world");
});
// localhost:3000/home
app.get("/home", (req, res) => {
  res.send("Welcome to homepage");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("sucesssfully posted");
});

app.listen(3000);
