//=========import libs========//
import axios from "axios";


//=========import functions========//
import { getImagesByQuery } from "./js/pixabay-api";

//=======Getting access to elements======//


const searchField =document.querySelector("[name='search-text']");
const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader-space");


let queryRequest = "";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchField.value.trim();
    console.log(queryRequest);

    if (query ==="") {
        
        console.log ("Please enter a search query");   
        
    } else if (query !== queryRequest) {
        queryRequest = query;
        gallery.innerHTML = "";   
        getImagesByQuery(queryRequest, loader, gallery);
        
    }


    
    form.reset();
    

});






