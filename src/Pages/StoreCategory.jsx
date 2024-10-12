import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';

const StoreCategory = (props) => {
  const {products_info} = useContext(StoreContext);
  return (
    <div>StoreCategory
      <img src={props.card} alt='category card' />
    </div>
  )
}

export default StoreCategory;