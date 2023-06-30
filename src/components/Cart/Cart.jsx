import { PropTypes } from "prop-types";
const Cart = (props) => {
  const {cart} = props;
  return (
    <>
      Cart Order: {cart.length}  
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array
};

export default Cart;