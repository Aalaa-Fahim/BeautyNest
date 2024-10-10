import React from 'react'
import Hero from '../Components/Hero/Hero';
import Products from '../Components/Products/Products';
import BestSale from '../Components/BestSale/BestSale';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSale />
      <Products />
    </div>
    
  )
}

export default Home;
