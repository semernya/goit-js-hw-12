import axios from 'axios';

export async function fetchImages(searchWord, currPage) {
  const KEY = '41952140-5e618661129c37e138516e154';
  const URL = 'https://pixabay.com/api/';
  const resp = await axios.get(URL, {
    params: {
      key: KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currPage,
      per_page: 15,
    },
  });
  return resp.data;

}
