let photos = document.querySelectorAll('.gallery-item');

photos.forEach(photo => {
    photo.addEventListener('click', function () {
        photo.style.transform = 'scale(2)';
        photo.style.zIndex = '10';
        photo.style.transition = 'transform 0.3s ease';
    });

    photo.addEventListener('mouseleave', function () {
        photo.style.transform = 'scale(1)';
        photo.style.zIndex = '1';
    });
});
