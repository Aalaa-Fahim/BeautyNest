import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import { use } from 'framer-motion/client';
import { useParams } from 'react-router-dom';

const Product = () => {
  const {all_product} = useContext(StoreContext);
  const {productId} = useParams();
  const catch_product = all_product.find((e) => e.id === (productId));
  return (
    <div>Product</div>
  )
}

export default Product;