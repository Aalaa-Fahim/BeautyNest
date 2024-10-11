import React from 'react';

const Item = (props) => {
  return (
    <div className='bg-pink-100 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105'>
      <img 
        src={props.image} 
        alt='Item Image' 
        className='w-full h-48 object-cover mx-auto' 
      />
      <p className='text-left text-base font-bold text-purple-950 mt-2'>{props.name}</p>
      <div className='flex justify-between items-center mt-2'>
        <div className='text-pink-600 font-semibold text-lg'>
          ${props.new_price}
        </div>
        <div className='text-gray-400 line-through text-sm'>
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
