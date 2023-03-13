import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const refs = {
    gallery: document.querySelector('.gallery'), 
}


function createMarkup (gallery) {

    return gallery.map(({preview, original, description})=> {
        return  `<a
          class="gallery__link"
          href="${original}"
        >
          <img 
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>`
      }
    ).join('')
    
}

refs.gallery.insertAdjacentHTML('beforeend',createMarkup(galleryItems))

const options = { captionsData: 'alt', captionDelay: 250 };
const test = new SimpleLightbox('.gallery a', options);