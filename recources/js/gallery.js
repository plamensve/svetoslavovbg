let photos = document.querySelectorAll('.gallery-item');

photos.forEach(photo => {
    let isZoomed = false;

    photo.addEventListener('click', function () {
        if (!isZoomed) {
            photo.style.transform = 'scale(2)';
            photo.style.zIndex = '10';
        } else {
            photo.style.transform = 'scale(1)';
            photo.style.zIndex = '1';
        }
        isZoomed = !isZoomed;
    });

    photo.addEventListener('mouseleave', function () {
        if (isZoomed) {
            photo.style.transform = 'scale(1)';
            photo.style.zIndex = '1';
            isZoomed = false;
        }
    });
});
