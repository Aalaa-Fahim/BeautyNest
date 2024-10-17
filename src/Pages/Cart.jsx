import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { all_data_product, cartItems, addToCart, removeFromCart, resetCart } = useContext(StoreContext);

  // Calculate the total price of the cart
  const calculateTotal = () => {
    let total = 0;
    all_data_product.forEach((product) => {
      if (cartItems[product.id] > 0) {
        total += cartItems[product.id] * Number(product.new_price);
      }
    });
    return total.toFixed(2);
  };

  // Calculate the subtotal for a specific product
  const calculateSubtotal = (product) => {
    return (cartItems[product.id] * Number(product.new_price)).toFixed(2);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4 text-secondary">Cart Details</h1>

      {/* Flex container with increased gap for large screens */}
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-8">
        {/* Product List */}
        <div className="w-full lg:w-2/3">
          {all_data_product.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <div key={product.id} className="flex flex-col md:flex-row items-center justify-between p-4 border-b">
                  <div className="flex items-center mb-4 md:mb-0 text-gray-700">
                    <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                    <div>
                      <h2 className="font-bold text-lg md:text-base">{product.name}</h2>
                      <p className="text-sm">Price: ${product.new_price}</p>
                      <p className="text-sm font-semibold">Subtotal: ${calculateSubtotal(product)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-[#bcaaaa97] hover:bg-secondary text-white text-lg px-3 py-1 mr-2 rounded-md shadow transition-all duration-200 ease-in-out"
                      onClick={() => removeFromCart(product.id)}>
                      -
                    </button>
                    <span className="text-lg text-gray-700">{cartItems[product.id]}</span>
                    <button
                      className="bg-[#bcaaaa97] hover:bg-secondary text-white text-lg px-3 py-1 ml-2 rounded-md shadow transition-all duration-200 ease-in-out"
                      onClick={() => addToCart(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* If no items in the cart */}
          {Object.keys(cartItems).every((key) => cartItems[key] === 0) && (
            <p className="text-center mt-4 text-secondary">Your cart is empty. <Link to="/" className="text-goldenPink">Shop now</Link>.</p>
          )}
        </div>

        {/* Cart Totals Section */}
        {Object.keys(cartItems).some((key) => cartItems[key] > 0) && (
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl text-secondary font-bold mb-4">Cart Totals</h2>
              <div className="text-lg space-y-2">
                <div className="flex justify-between text-gray-700 border-b py-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between border-b py-2 text-gray-700">
                  <span>Shipping Cost</span>
                  <span>Free</span>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between py-2 font-bold text-xl text-gray-700">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col mt-6 space-y-4">
                <button 
                  className="bg-goldenPink hover:bg-secondary text-white px-6 py-3 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                  Proceed to Checkout
                </button>
                
                {/* Reset Cart Button */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-200 ease-in-out"
                  onClick={resetCart}>
                  Reset Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
