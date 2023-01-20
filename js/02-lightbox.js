import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);


galleryImg.innerHTML = galleryCards;

function createGallery(items) {
    return items.map(({ preview, original, description }) => 
    
        `<a class="gallery__item" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
         />
        </a>
        `
    ).join('');
};

function imageClick(event) {
    event.preventDefault();
    
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) {
        return;
    }

}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionSelector:'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
 });
 