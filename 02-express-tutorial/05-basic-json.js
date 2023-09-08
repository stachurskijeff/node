const express = require("express");
const app = express();
const { products } = require('./data')

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(2137, () => {
  console.log("server is listening on the port 2137");
});
