import React from 'react'
import { LuChevronRight } from "react-icons/lu";

const ProductNav = (props) => {
  const {product} = props;
  return (
    <div>
      Home <LuChevronRight />{product.category} <LuChevronRight /> {product.name}
    </div>
  )
}

export default ProductNav