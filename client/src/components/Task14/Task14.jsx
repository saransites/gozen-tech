import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductLists";
import { useSelector } from "react-redux";
import useApi from "../Redux/UseApi";

const Task14 = () => {
  const api=useApi()
  const user=useSelector((state)=>state.data.user)
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await api.get(`/products/${user._id}`);
      setProducts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const clearSelection = () => {
    setSelectedProduct(null);
  };

  const deleteProduct = async (id) => {
    console.log(id)
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 items-center h-[100dvh]">
      <h1 className="text-xl font-bold">Product Management</h1>
      <ProductForm
        selectedProduct={selectedProduct}
        fetchProducts={fetchProducts}
        clearSelection={clearSelection}
      />

      <ProductList
        products={products}
        selectProduct={selectProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Task14;
