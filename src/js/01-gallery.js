// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createMarkupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
     </a>
  </li>`
    )
    .join('');
}

const galleryMarkup = createMarkupGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryList = document.querySelector('.gallery');
galleryList.querySelectorAll('.gallery__item').forEach(item => {
  item.style.listStyle = 'none';
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// console.log(lightbox);
