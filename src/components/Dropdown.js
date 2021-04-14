import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className=' text-gray-900 font-bold'>
      <div className='w-full text-center mt-3'>
        <Link
          to='/'
          className='block px-2 py-1 text-2xl font-thin text-gray-100 text-center'
        >
          Home
        </Link>
        <Link
          to='/about'
          className='block px-2 py-1 text-2xl font-thin text-gray-100 text-center'
        >
          About
        </Link>
        <Link
          to='/feed'
          className='block px-2 py-1 text-2xl font-thin text-gray-100 text-center'
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
