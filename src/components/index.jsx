import { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../utils/fakeDbOperations";
import Header from "./Header/Header";
import Products from "./Products/Products";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  },[]);

  useEffect(() => {
    let cartStorage = getShoppingCart();
    console.log(cartStorage);

    
  },[products]);
  const handleCart = (product) => {

    // const newCartItem = [...cart, product];
    // setCart(newCartItem);
    // console.log(cart);

    addToDb(product.id);
  };
  return (
    <>
      <Header cartLength={cart.length}/>
      <main className="grid grid-cols-5 mx-auto">
        <div className="grid grid-cols-3 col-span-4 gap-5 mt-5">
          <Products handleCart={handleCart} products={products}/>
        </div>
        <div className="col-span-1">
          {/* <Cart cart={cart}/> */}
        </div>
      </main>
    </>
  );
};

export default Home;