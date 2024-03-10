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
let currPage = 1;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(event) {
  event.preventDefault();
  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();
  fetchImages(searchWord)
    .then(data => {
      const marcup = renderMarcup(data);
      container.insertAdjacentHTML('beforeend', marcup);

      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  form.reset();
  loadMoreBtn.style.display = 'block';
}

function onLoadMore() {
  if (!data.hits || data.hits.length === 0) {
    loadMoreBtn.style.display = 'none';
    showEndOfListMessage();
    return;
  }
   else {
    try {
      fetchImages(searchWord).then(data => {
        const marcup = renderMarcup(data);
        container.insertAdjacentHTML('beforeend', marcup);
        lightbox.refresh();
        currPage += 1;
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
