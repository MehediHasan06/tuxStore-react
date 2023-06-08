import { useState } from "react";
import Header from "./Header/Header";
import Products from "./Products/Products";

const Home = () => {
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    const newCartItem = [...cart, product];
    setCart(newCartItem);
    console.log(cart);
  };
  return (
    <>
      <Header cartLength={cart.length}/>
      <main className="grid grid-cols-5 mx-auto">
        <div className="grid grid-cols-3 col-span-4 gap-5 mt-5">
          <Products handleCart={handleCart}/>
        </div>
        <div className="col-span-1">Order Cart: {cart.length}</div>
      </main>
    </>
  );
};

export default Home;