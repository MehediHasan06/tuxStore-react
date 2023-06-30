import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";

const Products = (props) => {

  return (
    <>
      {
        props.products.map(product => <ProductCard 
          key={product.id} 
          product={product}
          handleCart={props.handleCart}
        />)
      }
    </>
  );
};
Products.propTypes = {
  handleCart: PropTypes.func,
  products: PropTypes.array
};

export default Products;