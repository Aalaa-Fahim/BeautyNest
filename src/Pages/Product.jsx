import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import { use } from 'framer-motion/client';
import { useParams } from 'react-router-dom';
import ProductNav from '../Components/ProductNav/ProductNav';

const Product = () => {
  const {all_data_product} = useContext(StoreContext);
  const {productId} = useParams();
  const product = all_data_product.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <ProductNav product={product}/>
      <ProductNav product={product}/>
      <ProductNav product={product}/>
      <ProductNav product={product}/>
    </div>
  )
}

export default Product;