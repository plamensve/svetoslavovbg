const section = document.querySelector('.first-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (window.innerWidth > 1800) {
            if (entry.isIntersecting) {
                section.classList.add('full-width');
                section.style.borderRadius = '0px';
            } else {
                section.classList.remove('full-width');
                section.style.borderRadius = '30px';
            }
        } else {
            // Принудително махаме ефекта под 1800px
            section.classList.remove('full-width');
            section.style.borderRadius = '30px';
        }
    });
}, {
    threshold: 0.47
});

observer.observe(section);

// За всеки случай – при resize махаме класа ако е под 1800px
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1800) {
        section.classList.remove('full-width');
        section.style.borderRadius = '30px';
    }
});
