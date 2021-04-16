import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../api/api';
import Card from '../components/Card';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Feed = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const searchHeros = (name) => {
    search(name)
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    searchHeros(value);
  };
  return (
    <>
      <div className=' mt-5 w-3/4 mx-auto'>
        <span className='absolute mt-3.5 -ml-4 lg:ml-2 items-center pl-3'>
          <svg
            className='w-5 h-5 text-gray-900'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </span>

        <input
          type='text'
          value={value}
          className='w-full text-gray-900 py-3 -ml-6 lg:-ml-0 pl-11 lg:pl-14 z-0 border font-bold rounded-full border-gray-600  focus:border-primary focus:outline-none focus:ring placeholder-gray-900 bg-blue-200'
          placeholder='Search '
          onChange={handleChange}
        />
        <button
          className='absolute p-3 ml-2 rounded-lg  bg-primary  focus:outline-none'
          onClick={handleClick}
        >
          <svg className='w-5 h-6 text-white' viewBox='0 0 24 24' fill='none'>
            <path
              d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </button>
      </div>
      {data.length > 0 ? (
        <div className='m-10 w-full  ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pr-9 '>
          {data.map((hero) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={transition}
              exit={{ opacity: 0 }}
            >
              <Link
                to={{
                  pathname: `/feed/${hero.name}/${hero.id}`,
                  state: hero,
                }}
              >
                <Card
                  thumbnail={hero.thumbnail}
                  name={hero.name}
                  description={hero.description}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <h1 className='text-white text-center mt-10 p-10'>
          If you don't get the results
          <br />
          search for relevant words.for ex:For Ironman search 'iron'
        </h1>
      )}
    </>
  );
};

export default Feed;
