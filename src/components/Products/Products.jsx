import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  },[]);

  return (
    <>
      {
        products.map(product => <ProductCard 
          key={product.id} 
          product={product}
          handleCart={props.handleCart}
        />)
      }
    </>
  );
};
Products.propTypes = {
  handleCart: PropTypes.func
};

export default Products;