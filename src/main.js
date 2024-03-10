import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderMarcup, showEndOfListMessage } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.search-form');
const container = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-btn');
let searchWord = '';
let currPage;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  currPage = 1;
  event.preventDefault();
  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();

  try {
    const images = await fetchImages(searchWord, currPage).then(data => {
      const marcup = renderMarcup(data);
      container.insertAdjacentHTML('beforeend', marcup);
      lightbox.refresh();
    });
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
  loadMoreBtn.style.display = 'block';
}

async function onLoadMore() {
currPage += 1;
  try {
    const images = await fetchImages(searchWord, currPage).then(data => {
      const marcup = renderMarcup(data);
      container.insertAdjacentHTML('beforeend', marcup);
      lightbox.refresh();
    });

    const cardHeight = container.getBoundingClientRect().height;
    window.scrollBy({
      top: 4 * cardHeight,
      behavior: 'smooth',
    });

    if (!images.hits || images.hits.length === 0) {
      loadMoreBtn.style.display = 'none';
      showEndOfListMessage();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
