import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const ProductDetails = (props) => {
  const {product} = props;
  return (
    <div className='max-w-screen-xl mx-auto flex gap-10 pt-6'>
      <div className='max-w-screen-xl mx-auto flex gap-10'>
        <div className='w-2/5 relative'><img className='w-full h-[550px] object-cover' src={product.image} alt='product image' />
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-4xl font-semibold'>{product.name}</h2>
            <div className='flex items-center gap-12 mt-3'>
              <p className='text-goldenPink font-semibold text-2xl'>${product.new_price}</p>
              <p className='text-gray-500 line-through text-xs'>${product.old_price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex'>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <p className='text-xs text-gray-400'>(132 Customer review)</p>
          </div>
          <p className='text-base text-gray-600 -mt-3'>{product.description}</p>
          <div className='flex gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-700 gap-4 border rounded-lg  p-3'>
              <p className='text-sm '>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button className='border h-5 font-normal text-goldenPink text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-[#695c5c]'>-</button>
                <span>{1}</span>
                <button className='border h-5 font-normal text-goldenPink text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-[#695c5c]'>+</button>
              </div>
            </div>
            <button className='bg-[#695c5c] text-white font-semibold py-3 px-6 rounded-lg  transition-colors hover:bg-[#cbb1b1] mt-auto'>add to cart</button>
          </div>
          <p>Category: <span className='font-medium capitalize'>{product.category}</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails;