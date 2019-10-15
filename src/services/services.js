import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const GetPhoto = (SearchWord, PageNumber = 1) => {
  const key = `?key=13926508-6b0fafb95f21bec705bf751f4`;
  const settings = '&image_type=photo&orientation=horizontal&per_page=12';
  const searchQwery = `&q=${SearchWord}`;
  const numberP = `&page=${PageNumber}`;
  return axios.get(key + settings + searchQwery + numberP);
};

export default GetPhoto;
