import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

//* EVENT

form.addEventListener("submit", e => {
    e.preventDefault();
    const search = e.target.elements['search-text'].value.trim();
    if (!search) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        return;
    }
    clearGallery()
    showLoader()
    getImagesByQuery(search)
    .then(images => {
        hideLoader();
        if (images.length === 0) {
            iziToast.error({
                title: 'No results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
            return;
        }
        createGallery(images);
    })
    .catch(error => {
            hideLoader();
            iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again.' });
            console.error(error);
    });
})