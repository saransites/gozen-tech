const Products = require("../models/productModal");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const getItems = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    // Validate if the ID is a valid ObjectId (for Mongoose)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    // Use the ID string directly in Mongoose queries
    const product = await Products.find({ userId: id });
    if (!product) {
      return res.json({ message: "no products found" });
    }
    res.json(product);
  } catch (err) {
    console.log(err);
  }
};

const postItems = async (req, res) => {
  const { name, price, userId } = req.body;
  if (!name || !price || !userId) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  try {
    const newProducts = new Products({ userId, name, price });
    await newProducts.save();
    res.status(201).json({ message: "successsfully inserted" });
  } catch (err) {
    console.log(err);
  }
};
const updateItems = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const { name, price } = req.body;
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteItems = async (req, res) => {
  const { id } = req.params;
  try {
    // Validate if the ID is a valid ObjectId (for Mongoose)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteItems,
  getItems,
  postItems,
  updateItems,
};
