import React from 'react'
import Hero from '../Components/Hero/Hero';
import Products from '../Components/Products/Products';
import BestSale from '../Components/BestSale/BestSale';
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSale />
      <Products />
      <FeedbackForm />
    </div>
    
  )
}

export default Home;
