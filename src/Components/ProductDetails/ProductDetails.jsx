import React from 'react'

const ProductDetails = (props) => {
  const {product} = props;
  return (
    <div>
      <div className='max-w-screen-xl mx-auto flex gap-10'>
        <div className='w-2/5 relative'><img className='w-full h-[550px] object-cover' src={product.image} alt='product image' />
        </div>
        <div className='w-3/5 flex flex-col justify-center'>
          <div>
            <h1 className='text-4xl font-semibold'>{product.name}</h1>
            <div className='flex items-center gap-12 mt-3'>
              <p className='text-goldenPink font-semibold text-2xl'>${product.new_price}</p>
              <p className='text-gray-500 line-through text-xs'>${product.old_price}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails;