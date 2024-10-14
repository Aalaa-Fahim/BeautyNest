import React from 'react';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const BestSale = () => {
  return (
    <div className='container mx-auto px-4 py-8' style={{ paddingLeft: '50px' }}>
      <h1 className='text-3xl font-bold text-left mb-4' style={{ color: '#daa49a' }}>
        Best Sale Products
      </h1>
      <hr className='mb-4' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        {data_product.map((item, index) => (
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
  );
}

export default BestSale;
