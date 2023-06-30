// get the existing local-storage value
const getShoppingCart = () => {
  let shoppingCart = {};
  let storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if(storedCart){
    shoppingCart = storedCart;
  }
  return shoppingCart;
};

const addToDb = (id) => {
  let shoppingCart = getShoppingCart();

  const quantity = shoppingCart[id];
  if(quantity){
    shoppingCart[id] = quantity+1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeProduct = (id) => {
  let storedCart = getShoppingCart();
  if(id in storedCart){
    delete storedCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
  }
};

const clearCart = () => {
  localStorage.removeItem('shopping-cart');
};

export {
  getShoppingCart,
  addToDb,
  removeProduct,
  clearCart
};
