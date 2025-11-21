import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(img => {
            return `
        <a class="gallery-item" href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>`;
        })
        .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh()
}
export function clearGallery() { 
    gallery.innerHTML = "";
}
export function showLoader() {
    loader.classList.remove('hidden');
}
export function hideLoader() { 
    loader.classList.add('hidden');
}

