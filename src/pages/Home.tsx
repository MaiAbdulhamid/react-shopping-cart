import React from "react";
import Categories from "../containers/Categories";
import ProductList from "../containers/ProductList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-12">
          <Categories />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
