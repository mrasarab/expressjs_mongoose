const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./model");
require("dotenv").config();
const url = process.env.Database_url;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("welcome");
});

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put()

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("app listning on port 3000");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
