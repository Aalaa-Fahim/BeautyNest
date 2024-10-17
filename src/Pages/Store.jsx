import React from 'react'
import all_data_product from '../assets/all_product';
import Item from '../Item/Item';

const Store = () => {
  return (
    <div className='container mx-auto px-8 py-8'>
      <h1 className='text-4xl font-bold text-left mb-6' style={{ color: '#daa49a' }}>
        All Store Products
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        {all_data_product.map((item, index) => (
          <Item 
            key={index} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Store;