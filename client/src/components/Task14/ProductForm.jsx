import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useApi from '../../components/Redux/UseApi';

const ProductForm = ({ selectedProduct, fetchProducts, clearSelection }) => {
  const api = useApi();
  const user = useSelector((state) => state.data.user);
  const [Products, setProducts] = useState({
    name: "",
    price: null,
  });
  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (selectedProduct) {
      setProducts({
        name: selectedProduct.name,
        price: selectedProduct.price,
      });
    } else {
      setProducts({
        name: "",
        price: "",
      });
    }
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProduct) {
        await api.put(`/products/${selectedProduct._id}`, Products);
      } else {
        if (!Products.name || !Products.price) {
          alert("fill the field");
          return;
        }
        const data = { ...Products, userId: user?._id };
        await api.post("/products", data);
      }
      fetchProducts();
      clearSelection();
      setProducts({
        name: "",
        price: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        name="name"
        value={Products.name}
        onChange={handleChange}
        required
        className="p-2 rounded border-2 border-black outline-none"
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={Products.price}
        onChange={handleChange}
        required
        className="p-2 rounded border-2 border-black outline-none"
      />
      <button className="p-2 px-6 rounded bg-green-500 ml-2" type="submit">
        {selectedProduct ? "Update" : "Add"} Product
      </button>
      {selectedProduct && <button onClick={clearSelection} className="p-2 px-6 rounded bg-slate-500 ml-2">Cancel</button>}
    </form>
  );
};

export default ProductForm;
