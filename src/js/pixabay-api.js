//=======Functions for http requests======//
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGalleryMarkup } from "./render-functions";

const API_KEY = "30786866-3f5d93462a7f9cfec75d687d6";
const BASE_URL = "https://pixabay.com/api/";



const instance = axios.create({
    baseURL: BASE_URL,
    
    params: {
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    }
});

export async function getImagesByQuery (query, loader, gallery) {
    loader.innerHTML = `<span class="loader"></span>`;

    try {
      const response =  await instance.get("", {params: {q: query}});
        console.log(response.data.hits);
        if (response.data.hits.length === 0) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
        } else {
            await delay(2000);
           createGalleryMarkup(response.data.hits, loader, gallery);
            
        }


    }
     
    catch(error) {
        console.log(error);
    } 

    finally {
        loader.innerHTML = "";
    }
};





function delay (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
};