import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <div className='bg-[#ffffff] py-10 px-4'>
      <h2 className='text-3xl font-bold text-center text-[#695c5c] mb-6'>
        We want to hear from you :)
      </h2>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-[#f3d6cf] shadow-md rounded-lg p-6'>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2 text-gray-700'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2 text-gray-700'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2 text-gray-700'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Leave your feedback or question'
            required
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-[#695c5c] text-white font-bold py-2 px-4 rounded-md hover:bg-[#cbb1b1]'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
