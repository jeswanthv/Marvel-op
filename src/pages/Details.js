import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { search } from '../api/api';
import Card from '../components/Card';
import comicImage from '../images/marvel comics.png';
import seriesImage from '../images/marvel.jpg';
import { getComics } from '../api/api';
import { motion } from 'framer-motion';

const Details = (props) => {
  const id = props.match.params.id;
  const hero = props.location.state;

  const [comics, setComics] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getComics(id)
      .then((res) => setComics(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(hero);
  console.log(comics);
  const { name, description, thumbnail } = hero;
  const image = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <>
      <motion.img
        initial={{ top: -400 }}
        animate={{ top: 0 }}
        transition={{ type: 'spring' }}
        className=' opacity-70 absolute top-0 left-0 z-0 w-full h-3/4 md:h-2/4 object-cover '
        style={{ zIndex: '-1' }}
        src={image}
        alt=''
      />

      <motion.div
        className='relative w-full mt-10 pl-5 mb-10'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ type: 'spring', delay: 1, duration: 1.5 }}
      >
        <motion.h1 className='text-white font-black text-2xl md:text-4xl '>
          {name}
        </motion.h1>
        <p className='text-white text-md font-semibold text-md md:text-lg mt-5'>
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className='grid grid-cols-1 lg:grid-cols-2 gap-5  h-full'
      >
        {/* comics */}
        <div>
          <h1 className='text-white font-black text-2xl md:text-4xl mt-10  mb-10 text-center '>
            Comic collection
          </h1>
          <Link to={`/feed/${hero.name}/${hero.id}/comics`}>
            <img className='w-3/4 mx-auto' src={comicImage} alt='' />
          </Link>
        </div>
        {/* series */}
        <div>
          <h1 className='text-white font-black text-2xl md:text-4xl mt-10 mb-10 text-center '>
            Series collection
          </h1>
          <Link to={`/feed/${hero.name}/${hero.id}/series`}>
            <img
              className='w-3/4 h-3/4 object-cover mx-auto'
              src={seriesImage}
              alt=''
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default withRouter(Details);
