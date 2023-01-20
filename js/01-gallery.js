import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);

galleryImg.innerHTML = galleryCards;

function createGallery(items) {
    return items.map(({ preview, original, description }) => 
    
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    /></a>
    </div>`).join('');
};

galleryImg.addEventListener('click', onSmallImageClick);

function onSmallImageClick(event) {
    event.preventDefault();
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) {
        return;
    }

    const urlOfBigImage = event.target.dataset.source;
    
    openModalBigImage(urlOfBigImage);
}

function openModalBigImage(url) {
    const closeModal = event => {
        if (event.code === 'Escape') { 
            instance.close(); 
        }
    };

    const instance = basicLightbox.create(`
		<img src="${url}">`,
        {
            onShow: () =>
                document.addEventListener('keydown', closeModal),
            onClose: () =>
                document.removeEventListener('keydown', closeModal)
        });
    instance.show();
}
