document.addEventListener('DOMContentLoaded', () => {
    const c1 = document.querySelector('.c-1');
    const c2 = document.querySelector('.c-2');
    const container = document.querySelector('.container-2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                c1.classList.add('visible');
                c2.classList.add('visible');
            } else {
                c1.classList.remove('visible');
                c2.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(container);
});
