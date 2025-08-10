const images = document.querySelectorAll('.imag-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
        setTimeout(() => lightbox.classList.add('show'), 10);
    });
});

// Show current image
function showImage() {
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.style.opacity = '1';
    }, 200);
}

// Next
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Previous
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Close
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
    setTimeout(() => lightbox.style.display = 'none', 300);
});

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
        setTimeout(() => lightbox.style.display = 'none', 300);
    }
});
