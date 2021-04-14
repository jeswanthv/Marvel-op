import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1 }}
      className='mx-4'
    >
      <h1 className='text-4xl font-bold text-secondary text-center pt-12 pb-2'>
        About the website
      </h1>
      <hr />
      <p className='text-2xl font-semibold text-white text-center p-10'>
        This is a Website Where we can search the characters of marvel and get
        their comics and series collection <br />
      </p>
      <h1 className='text-4xl font-bold text-secondary text-center pt-12 pb-2'>
        About ME
      </h1>
      <hr />
      <p className='text-2xl font-semibold text-white text-center p-10'>
        I am a pasionate (fullstack) webdeveloper From India🔥 <br />
        Wanna
        <span className='text-primary text-4xl'>
          <a href='https://jeswanth.netlify.app/' target='_blank'>
            {' '}
            contact ME?
          </a>
          <br />☝
        </span>
      </p>
      <p className='text-sm mt-10 mb-5 text-primary text-center'>
        Data collected from marvel api © 2021 MARVEL
      </p>
    </motion.div>
  );
};

export default About;
