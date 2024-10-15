import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Categories = () => {
  // Define an array of categories, each containing a name and a link
  const categories = [
    { name: 'Beauty', link: '/beauty', image: '/src/assets/images/beauty1.jpg' },
    { name: 'Facial', link: '/facial', image: '/src/assets/images/facial2.jpg' },
    { name: 'Hair', link: '/hair', image: '/src/assets/images/hair2.jpg' },
    { name: 'Baby', link: '/baby', image: '/src/assets/images/baby.jpg' },
  ];

  // useEffect to initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-out-cubic' });
    AOS.refresh();
  }, []);

  return (
    <div className='container mx-auto px-8 py-8'>
      {/* Heading of the Categories section */}
      <h1 className='text-4xl font-bold text-left mb-6 sticky top-0 bg-white z-10' style={{ color: '#daa49a' }}>
        Categories
      </h1>
      
      {/* Grid layout for categories */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4' data-aos="flip-right">
        {categories.map((category, index) => (
          <div key={index} className='bg-[#f3d6cf] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 flex flex-col justify-center items-center max-w-[200px]'>
            {/* Display the category image */}
            <img
              src={category.image} 
              alt={category.name}
              className='rounded-full w-24 h-24 mb-4'
            />
            {/* Link to the category page */}
            <Link to={category.link} className='text-center text-2xl font-bold text-[#695c5c]'>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
