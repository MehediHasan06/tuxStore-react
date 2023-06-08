import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  },[]);

  return (
    <>
      {
        products.map(product => <ProductCard key={product.id} product={product}/>)
      }
    </>
  );
};

export default Products;