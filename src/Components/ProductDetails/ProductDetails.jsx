import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const ProductDetails = (props) => {
  const {product} = props;
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 py-10 px-4 lg:px-0'>
      <div className='max-w-screen-xl mx-auto flex gap-10'>
        <div className='w-full lg:w-1/3 relative'><img className='w-full h-[400px] lg:h-[450px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out' src={product.image} alt='product image' />
        </div>
        <div className='w-full lg:w-2/3 flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-semibold'>{product.name}</h2>
            <div className='flex items-center gap-4 lg:gap-12 mt-3'>
              <p className='text-goldenPink font-semibold text-xl lg:text-2xl'>${product.new_price}</p>
              <p className='text-gray-500 line-through text-xs lg:text-base'>${product.old_price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex text-yellow-500'>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <p className='text-xs text-gray-400'>(132 Customer review)</p>
          </div>
          <p className='text-lg text-gray-600'>{product.description}</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-52 flex items-center justify-between text-gray-700 gap-4 border rounded-lg p-3'>
              <p className='text-sm '>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button className='border h-5 font-normal text-goldenPink text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-[#695c5c]'>-</button>
                <span>{1}</span>
                <button className='border h-5 font-normal text-goldenPink text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-[#695c5c]'>+</button>
              </div>
            </div>
            <button className='bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>add to cart</button>
          </div>
          <p className='text-gray-500 text-sm'>Category: <span className='font-medium capitalize text-gray-900'>{product.category}</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails;