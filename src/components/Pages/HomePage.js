import React from "react";

import Products from "../homeComponents/Products";
import { productData, productDataTwo } from "../homeComponents/Products/data";
import Hero from "../../components/homeComponents/Hero/index";
import Feature from "../homeComponents/Feature";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </>
  );
};

export default Home;
