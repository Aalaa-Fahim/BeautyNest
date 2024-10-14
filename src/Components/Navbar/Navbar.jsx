import React from 'react'
import logo from '../../assets/images/logo.png';
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-seconary text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-secondary-900 hover:text-white rounded-md px-3 py-2';

  return (
    <div className='shadow-md bg-goldenPink duration-200 relative z-40 border-b border-pink-700'>
      <div className='py-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='container flex justify-between items-center h-20 '>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link to='/' className='font-bold text-2xl sm:text-3xl flex gap-2 flex-shrink-0 items-center mr-4'>
            <img src={logo} alt='logo' className='h-10 w-auto' />
            <span className='hidden md:block text-purple-950 text-2xl font-bold ml-2'>Beauty<span className='text-pink-600'>Nest</span>
            </span>
            </Link>
            <div className='md:ml-auto flex items-center flex-1  md:items-stretch'>
              <div className='flex space-x-12 items-center'>
                <NavLink to='/' className={linkClass}>Home</NavLink>
                <NavLink to='/beauty' className={linkClass}>Beauty</NavLink>
                <NavLink to='/facial' className={linkClass}>Facial</NavLink>
                <NavLink to='/hair' className={linkClass}>Hair</NavLink>
                <NavLink to='/baby' className={linkClass}>Baby</NavLink>
              </div>
            </div>
            <Link to='/cart'><button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-300">
                  Order Now</span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button></Link>
            
            <Link to='/login'><button className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
              login
            </button></Link>
            

          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
