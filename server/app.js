const express = require("express");

const app = express();

const PORT =  8080;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));

const items = [
  {
    name: "Sraptop",
    price: 500,
  },
  {
    name: "Desktop",
    price: 700,
  }
];

app.get("/api/items", (req, res) => {
  res.send(items);
});