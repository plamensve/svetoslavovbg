const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const gallerySection = document.getElementById('gallery');
const images = Array.from(items).map(item => item.querySelector('img'));

let index = 0;
const scrollStep = 300;

function updateBackground() {
    gallerySection.style.backgroundImage = `url('${images[index].src}')`;

    images.forEach((img, i) => {
        img.classList.remove('active', 'inactive');
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.add('inactive');
        }
    });
}

document.getElementById('next').onclick = () => {
    index = (index + 1) % images.length;
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    updateBackground();
};

document.getElementById('prev').onclick = () => {
    index = (index - 1 + images.length) % images.length;
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    updateBackground();
};

images.forEach((img, i) => {
    img.addEventListener('click', () => {
        index = i;
        updateBackground();
    });
});

updateBackground();
