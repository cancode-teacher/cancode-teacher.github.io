const imageGallery = [
    "https://images.pexels.com/photos/11557791/pexels-photo-11557791.jpeg",
    "https://images.pexels.com/photos/11424359/pexels-photo-11424359.jpeg",
    "https://images.pexels.com/photos/1630883/pexels-photo-1630883.jpeg"
];

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();

nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});

prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 +imageGallery.length) % imageGallery.length;
    updateImage();
});