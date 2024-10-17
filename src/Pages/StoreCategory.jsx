import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import Item from '../Components/Item/Item';

const StoreCategory = (props) => {
  const { all_data_product } = useContext(StoreContext);

  return (
    <div className='container mx-auto px-4 py-12' style={{ paddingTop: '80px' }}>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        {/* Paragraph section */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold capitalize" style={{ color: '#daa49a' }}>{props.category}</h1>
          <p className="mt-4 text-2xl font-bold" style={{ color: '#695c5c' }}>{props.description}</p>
        </div>

        {/* Image section */}
        <div className="md:w-1/2">
          <img 
            src={props.banner} 
            alt={`${props.category} Banner`} 
            className='w-full h-auto object-cover rounded-lg'
            style={{ maxHeight: '600px' }}
          />
        </div>
      </div>

      {/* Products Grid */}
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
