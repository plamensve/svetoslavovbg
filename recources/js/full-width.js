const section = document.querySelector('.first-section');
const mainHeader = document.querySelector('.main-header')
const topHeader = document.querySelector('.top-lane-contact')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section.classList.add('full-width');
            section.style.borderRadius = '0px';
            mainHeader.style.background = "#3a7a7b";
            mainHeader.style.backgroundSize = "100% 200%";
            mainHeader.style.backgroundPosition = "top";
            mainHeader.style.boxShadow = "";
        } else {
            section.classList.remove('full-width');
            section.style.borderRadius = '30px';
            mainHeader.style.background = 'linear-gradient(to right, #479698, #2b4d4e)';
        }
    });
}, {
    threshold: 0.55
});


observer.observe(section);
