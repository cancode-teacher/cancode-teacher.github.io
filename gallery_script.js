// Array of image URLs for the image gallery
const imageGallery = [
    "https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2416602/pexels-photo-2416602.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2782485/pexels-photo-2782485.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

// Find image element and buttons
const imageElement = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Track current image index
let currentImageIndex = 0;

// Function to update image displayed
function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

// Event listener for 'Previous' button
prevButton.addEventListener('click', function() {
    // Go to the previous image (loop back if at the start)
    currentImageIndex = (currentImageIndex - 1 + imageGallery.length) % imageGallery.length;
    updateImage();
});

// Event listener for 'Next' button
nextButton.addEventListener('click', function() {
    // Go to the next image (loop back if at the end)
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});

// Initially display the first image
updateImage();
