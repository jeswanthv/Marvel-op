import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { getSeries } from '../api/api';
import loadingMan from '../images/animationloading.gif';

const Series = (props) => {
  const id = props.match.params.id;
  const [series, setseries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getSeries(id).then((res) => {
        setseries(res.data.results);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(loading);
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
          {' '}
          <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {series.map((serie) => {
              const image = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
              return (
                <motion.div
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
                  <h1 className='text-2xl text-primary'>{serie.title}</h1>
                  <h1 className='text-2xl text-secondary'>{serie.startYear}</h1>
                </motion.div>
              );
            })}
          </div>
          <h1 className='text-blue-200 font-normal md:text-xl text-center m-5'>
            {series == 0 && 'Oops, No series on this character'}
          </h1>
        </>
      )}
    </>
  );
};

export default Series;
