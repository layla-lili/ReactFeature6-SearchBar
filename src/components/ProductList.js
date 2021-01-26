// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import React, { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
