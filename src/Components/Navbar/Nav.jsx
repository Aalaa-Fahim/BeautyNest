import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-secondary text-white hover:bg-gradient-to-r from-primary to-secondary rounded-md px-3 py-2'
      : 'text-white hover:bg-secondary-900 hover:text-white rounded-md px-3 py-2';

  return (
    <div className='shadow-md bg-goldenPink duration-200 relative z-40 border-b border-pink-700'>
      <div className='py-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img src={logo} alt='logo' className='h-8 sm:h-10 w-auto' />
              <span className='hidden md:block text-purple-950 text-xl sm:text-2xl font-bold ml-2'>
                Beauty<span className='text-pink-600'>Nest</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
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
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order Now
                </span>
                <FaCartShopping className="text-xl text-white" />
              </button>
            </Link>
            <Link to='/login'>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Links Dropdown */}
        {isMenuOpen && (
          <div className='md:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'>
            <div className='space-y-6 text-center'>
              <NavLink to='/' className={linkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to='/beauty' className={linkClass} onClick={() => setIsMenuOpen(false)}>Beauty</NavLink>
              <NavLink to='/facial' className={linkClass} onClick={() => setIsMenuOpen(false)}>Facial</NavLink>
              <NavLink to='/hair' className={linkClass} onClick={() => setIsMenuOpen(false)}>Hair</NavLink>
              <NavLink to='/baby' className={linkClass} onClick={() => setIsMenuOpen(false)}>Baby</NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
