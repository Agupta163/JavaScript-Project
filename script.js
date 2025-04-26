// Array of image URLs
const images = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1020/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1020/600/400'
];

// Get references to DOM elements
const sliderImage = document.getElementById('slider-image');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;

// Function to update image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Cycle back to first
    }
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Cycle to last
    }
    updateImage();
});

// Initial image load
updateImage();
