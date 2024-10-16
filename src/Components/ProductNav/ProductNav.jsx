import React from 'react'
import { Link } from 'react-router-dom';

const ProductNav = (props) => {
  const {product} = props;
  return (
    <div>
      <Link to="/">Home</Link>{">"}<Link to={`/${product.category}`}> {product.category}</Link>{">"} {product.name}
    </div>
  )
}

export default ProductNav