import React from 'react'
import { Link } from 'react-router-dom';

const ProductNav = (props) => {
  const {product} = props;
  return (
    <div className='max-w-screen-xl mx-auto flex pt-20'>
      <Link to="/">Home</Link>{">"}<Link to={`/${product.category}`}> {product.category}</Link>{">"}<Link to={`/product/${product.id}`}>{product.name}</Link>
    </div>
  )
}

export default ProductNav