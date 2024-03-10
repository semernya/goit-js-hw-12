import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const KEY = '41952140-5e618661129c37e138516e154';
const URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export async function fetchImages(searchWord, currPage) {
  loader.style.display = 'block';
  try {
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
    loader.style.display = 'none';

    if (resp.data.hits.length === 0) {
      iziToast.error({
        timeout: 3000,
        position: 'topRight',
        message:
          'There are no images matching your search query. Please, enter something else!',
      });
    }
    return resp.data;
  } catch (error) {
    console.error('Error fetching data!', error);
  }
}
