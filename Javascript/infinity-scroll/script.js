const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'VGfMFonq_geo6ZQfTPtcAVHRsn1qjGvTZA4AV6J1kaw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Check if all images loaded
function imageLoaded(){
    console.log('Image Loaded');
}


// Create Elements for Links and Photos, Add to DOM
function displayPhotos(){
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        // console.log(photo.alt_description);
        img.setAttribute('title', photo.alt_description)

        //  Check when image has finished loading..
        img.addEventListener('load', imageLoaded)

        // Put <img> inside anchor element, and put both inside imageContainer element
        item.appendChild(img)
        imageContainer.appendChild(item)
    });
    
}

// Get Photos from API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos()
    }
    catch(error){
        // Catch Error Here
        console.log(`There's some Error : ${error}`);
    }
}

//  Check to see if scrolling near bottom of pae, load more photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos()
    }
})

getPhotos()