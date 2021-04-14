import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { getComics } from '../api/api';
import loadingMan from '../images/animationloading.gif';

const Comics = (props) => {
  const id = props.match.params.id;
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComics(id)
      .then((res) => {
        setComics(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <div className='w-1/2 mx-auto h-full'>
          <img
            className='w-full mt-20 md:w-1/2 mx-auto h-full'
            src={loadingMan}
            alt=''
          />
        </div>
      ) : (
        <>
          <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {comics.map((comic) => {
              const image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
              return (
                <motion.div
                  className='px-5 mb-10'
                  className='px-5 mb-10'
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    className='mb-3  object-cover rounded-lg'
                    src={image}
                    alt=''
                  />
                  <h1 className='text-2xl text-primary'>{comic.title}</h1>
                  <h1 className='text-md text-green-400'>
                    ${comic.prices[0].price}
                  </h1>
                </motion.div>
              );
            })}
          </div>
          <h1 className='text-blue-200 font-normal md:text-xl text-center m-5'>
            {comics == 0 && 'Oops, No comics on this character'}
            {comics != 0 &&
              'Note:You can buy these comics in their official website!'}
          </h1>
        </>
      )}
    </>
  );
};

export default Comics;
