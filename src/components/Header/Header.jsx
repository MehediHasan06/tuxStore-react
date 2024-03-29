import { PropTypes } from "prop-types";
import logo from "../../assets/logo.svg";
const Header = (props) => {
  const {cartLength} = props;
  return (
    <nav className="bg-base-100">
      <div className="navbar">
        {/* Store Logo */}
        <div className="flex-1">
          <a href="#" className="w-32">
            <img src={logo} alt="" />
          </a>
        </div>

        {/* Store Nav Menu */}
        <div className="flex-none">
          {/* Nav menu */}
          <ul className="px-1 menu menu-horizontal">
            <li><a>Order</a></li>
            <li><a>Order Review</a></li>
            <li><a>Manage Inventory</a></li>
            <li><a>Login</a></li>
          </ul>
          {/* search functionality */}
          <div className="form-control">
            <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
          </div>
          {/* Cart Functionality */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{cartLength}</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </nav>
  );
};

Header.propTypes = {
  cartLength: PropTypes.number
}

export default Header;