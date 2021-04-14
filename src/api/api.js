import axios from 'axios';

//get data using startingWithName
export const search = async (name) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
  );
  return response.data;
};

//get data using characterId
export const info = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=b00027be5c85a2101817f4252271ce75&hash=f8f95ff7b976e4cb01d209b4102e5e06`
  );
  return response.data;
};

//get COMIC DATAmarve using characterId
export const getComics = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=b00027be5c85a2101817f4252271ce75&hash=f8f95ff7b976e4cb01d209b4102e5e06`
  );
  return response.data;
};

//get COMIC DATAmarve using characterId
export const getSeries = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/series?seriesType=collection&ts=1&apikey=b00027be5c85a2101817f4252271ce75&hash=f8f95ff7b976e4cb01d209b4102e5e06`
  );
  return response.data;
};
