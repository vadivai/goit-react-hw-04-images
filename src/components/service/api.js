import axios from 'axios';

const KEY = '32655416-b4a8f18676ee213d66752ceaa';
// const BASE_URL = 'https://pixabay.com/api/';
// const params = 'image_type=photo&orientation=horizontal';
const perPage = 12;

// const getImages = async (query, page) => {
//   const response = await axios.get(
//     `${BASE_URL}?q=${query}&key=${KEY}&per_page=${perPage}&page=${page}&${params}`
//   );
//   // console.log(response.data);
//   return response.data;
// };

// ERROR REQUEST
// const response = await axios.get(
//   `${BASE_URL}111?q=${query}&key=${KEY}&per_page=${perPage}&page=${page}&${params}`
// );

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}`);
  // console.log(response.data.hits);
  return response.data;
};

export { getImages, perPage };
