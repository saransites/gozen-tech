import React from "react";

const ProductList = ({ products, selectProduct, deleteProduct }) => {
  return (
    <>
      {products.length > 0 ? (
        <ul className="border border-black p-2">
          {Array.from(products) &&
            products?.map((product, i) => (
              <li key={product._id}>
                {i + 1}
                {") "}
                {product.name} - ${product.price}
                <button
                  className="p-2 px-6 rounded bg-slate-400 m-1"
                  onClick={() => selectProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="p-2 px-6 rounded bg-red-400"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <h1 className="text-xl">No Products found...</h1>
      )}
    </>
  );
};

export default ProductList;
