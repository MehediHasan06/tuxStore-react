import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  // Round the rating value to the nearest half-star
  const roundedRating = Math.round(rating * 2) / 2;

  // Generate an array of star elements based on the rounded rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (roundedRating >= i + 1) {
      stars.push(<FaStar key={i} />);
    } else if (roundedRating >= i + 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className='flex'>{stars}</div>;
};
StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;
