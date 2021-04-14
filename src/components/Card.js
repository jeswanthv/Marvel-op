import { motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Card = ({ thumbnail, name, description }) => {
  const image = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full mx-auto mb-10 h-full rounded-xl shadown-2xl overflow-hidde relative'
      style={{ minHeight: '400px' }}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={transition}
        className='absolute inset-0 h-full rounded-xl w-full object-cover'
        src={image}
      />
      <div className='absolute inset-0 bg-black bg-opacity-80'></div>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className='relative p-5'
      >
        <h1 className='text-2xl text-gray-100 tracking-wider font-bold'>
          {name}
        </h1>
        <h1 className='text-sm mt-3 p-1 text-gray-400 font-semibold'>
          {description && description}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Card;
