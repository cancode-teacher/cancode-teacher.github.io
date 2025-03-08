const imageGallery = [
    "https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2416602/pexels-photo-2416602.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2782485/pexels-photo-2782485.jpeg?auto=compress&cs=tinysrgb&w=1200"
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;