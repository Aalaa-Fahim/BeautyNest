import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import Item from '../Components/Item/Item';

const StoreCategory = (props) => {
  const { all_data_product } = useContext(StoreContext);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto mb-6'>
        <img 
          src={props.banner} 
          alt='category banner' 
          className='w-full h-auto object-cover rounded-lg'
          style={{ maxHeight: '400px' }} // Optional: Set a max height
        />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl'>
        {all_data_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default StoreCategory;
