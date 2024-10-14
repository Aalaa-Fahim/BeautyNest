import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Beauty', link: '/beauty' },
    { name: 'Facial', link: '/facial' },
    { name: 'Hair', link: '/hair' },
    { name: 'Baby', link: '/baby' },
  ];

  return (
    <div className='container mx-auto px-8 py-8'>
      <h1 className='text-4xl font-bold text-left mb-6' style={{ color: '#695c5c' }}>Categories</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {categories.map((category, index) => (
          <div key={index} className='bg-[#f3d6cf] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 flex flex-col justify-between min-h-[200px] w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] mb-8'>
            <Link to={category.link} className='text-center text-2xl font-bold text-[#695c5c]'>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
