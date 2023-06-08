import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import StarRating from '../Utility/StarRating';

const ProductCard = (props) => {
  console.log(props.product);
  const {name, img, price, ratings, seller} = props.product;
  return (
    <div className="p-4 shadow-xl card w-80">
      <figure><img src={img} alt="tux-product" /></figure>
      <div className="items-start p-4 card-body">
        <h2 className="card-title">{name}</h2>
        <StarRating rating={ratings}/>
        
        <div className="justify-between w-full card-actions">
          <p className="m-0 font-semibold text-left">Price: ${price}</p>
          <div className="badge badge-outline">{seller}</div> 
        </div>
      </div>
      <div className="justify-end card-actions">
        <button className="w-full btn btn-accent">
          <span>Add To Cart</span>
          <FaShoppingCart/>
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.number,
    seller: PropTypes.string
  })
};

export default ProductCard;