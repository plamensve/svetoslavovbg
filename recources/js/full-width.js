const section = document.querySelector('.first-section');
const mainHeader = document.querySelector('.main-header')
const topHeader = document.querySelector('.top-lane-contact')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section.classList.add('full-width');
            section.style.borderRadius = '0px';

        } else {
            section.classList.remove('full-width');
            section.style.borderRadius = '30px';
        }
    });
}, {
    threshold: 0.47
});


observer.observe(section);
