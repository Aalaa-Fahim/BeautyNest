import React, { useState, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(StoreContext);

  // Function to calculate total quantity of cart items
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-secondary text-white hover:bg-gradient-to-r from-primary to-seconda rounded-md px-3 py-2'
      : 'text-white hover:bg-secondary-900 hover:text-white rounded-md px-3 py-2';

  // Function to close menu after clicking any link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='shadow-md bg-goldenPink duration-300 fixed top-0 w-full z-40 border-b border-pink-700'>
      <div className='py-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img src={logo} alt='logo' className='h-16 sm:h-18 w-auto' />
            </Link>
          </div>

          {/* Mobile Order/Login Buttons and Hamburger Menu */}
          <div className='flex items-center space-x-4 md:hidden'>
            {/* Order Now Button */}
            <Link to='/cart'>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-300">
                  Order Now
                </span>
                <FaCartShopping className="text-xl text-white" />
                {/* Total Cart Items */}
                {getTotalItems() > 0 && (
                  <span className="ml-2 text-sm bg-secondary text-white rounded-full px-2 py-0.5">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </Link>
            {/* Login Button */}
            <Link to='/login'>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full">
                Login
              </button>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-white focus:outline-none'
            >
              <FaBars className='h-6 w-6' />
            </button>
          </div>

          {/* Links Section (Visible on larger screens) */}
          <div className='hidden md:flex space-x-6 items-center'>
            <NavLink to='/' className={linkClass}>Home</NavLink>
            <NavLink to='/beauty' className={linkClass}>Beauty</NavLink>
            <NavLink to='/facial' className={linkClass}>Facial</NavLink>
            <NavLink to='/hair' className={linkClass}>Hair</NavLink>
            <NavLink to='/baby' className={linkClass}>Baby</NavLink>
          </div>

          {/* Buttons Section (Visible on larger screens) */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link to='/cart'>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-300">
                  Order Now
                </span>
                <FaCartShopping className="text-xl text-white" />
                {/* Total Cart Items */}
                {getTotalItems() > 0 && (
                  <span className="ml-2 text-sm bg-secondary text-white rounded-full px-2 py-0.5">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </Link>
            <Link to='/login'>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Links Dropdown (Without Order/Login) */}
        {isMenuOpen && (
          <div className='md:hidden fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 space-y-6'>
            <NavLink to='/' className={linkClass} onClick={handleLinkClick}>Home</NavLink>
            <NavLink to='/beauty' className={linkClass} onClick={handleLinkClick}>Beauty</NavLink>
            <NavLink to='/facial' className={linkClass} onClick={handleLinkClick}>Facial</NavLink>
            <NavLink to='/hair' className={linkClass} onClick={handleLinkClick}>Hair</NavLink>
            <NavLink to='/baby' className={linkClass} onClick={handleLinkClick}>Baby</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
