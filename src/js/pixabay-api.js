import axios from "axios";
export function getImagesByQuery(query) {
    const baseURL = 'https://pixabay.com';
    const endPoint = '/api/';
    const params = new URLSearchParams({
        key: '53346532-56e1a2cf6c50fcc4672e719cf',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })
    const url = `${baseURL}${endPoint}?${params}`;    
    // return fetch(url).then(res => res.json()).then(data => data.hits);
    return axios.get(`${url}`).then(res => res.data.hits);
}