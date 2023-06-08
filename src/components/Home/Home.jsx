import Products from "../Products/Products";

const Home = () => {
  return (
    <main className="grid grid-cols-5 mx-auto">
      <div className="grid grid-cols-3 col-span-4 gap-5 mt-5">
        <Products/>
      </div>
      <div className="col-span-1">Order Cart</div>
    </main>
  );
};

export default Home;