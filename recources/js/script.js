// script.js

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.reset();
});

// Показване/скриване на бутона
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Скролиране до горе
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
