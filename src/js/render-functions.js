import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//=======Functions for rendering app elements======//

export function createGalleryMarkup(arr, loader, gallery) {
    loader.innerHTML = "";
     const galleryMarkup = gallery.insertAdjacentHTML("beforeend", arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})=>{
        return `<li class="gallery__item">
        <div class="gallery">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" title="${tags}"/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>

                    <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${likes}
                </p>
                <p class="info-item">
                    <b>Views</b>
                    ${views}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    ${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    ${downloads}
                </p>
            </div>
           
        </li>
        `

     })
     .join(""));

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "",
        captionDelay: 250,
    });
}