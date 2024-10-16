import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Item = (props) => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      offset: 300,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }, []);

  return (
    <div 
      className='bg-[#f3d6cf] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 flex flex-col justify-between min-h-[350px] w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] mb-8'
      data-aos="fade-right"
    >
      {/* Product Image Section */}
      <div className='flex justify-center items-center overflow-hidden rounded-lg mb-4'>
        <Link to={`/product/${props.id}`}><img 
          src={props.image} 
          alt='Item Image' 
          className='w-36 h-36 object-cover rounded-lg' 
        />
        </Link>
      </div>

      {/* Product Name and Prices Section */}
      <div className='flex-grow'>
        <p className='text-left text-sm font-bold text-[#695c5c]'>
          {props.name}
        </p>
        <div className='flex justify-between items-center mt-2'>
          <div className='text-[#695c5c] font-semibold text-md'>
            ${props.new_price}
          </div>
          <div className='text-gray-400 line-through text-xs'>
            ${props.old_price}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className='mt-4'>
        <button 
          className='bg-[#695c5c] text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors hover:bg-[#cbb1b1] mt-auto'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
