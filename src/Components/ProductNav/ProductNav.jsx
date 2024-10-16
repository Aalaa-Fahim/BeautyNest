import React from 'react'
import { Link } from 'react-router-dom';

const ProductNav = (props) => {
  const {product} = props;
  return (
    <div className='max-w-screen-xl mx-auto flex pt-20 items-center gap-2 py-4 px-4 lg:px-0 text-sm text-gray-600'>
      <Link to="/" className='hover:text-goldenPink transition-colors'>Home</Link>
      <span className='text-gray-500'>{">"}</span>
      <Link to={`/${product.category}`}> {product.category}</Link>{">"}<Link to={`/product/${product.id}`}>{product.name}</Link>
    </div>
  )
}

export default ProductNav