let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});
document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}
document.querySelectorAll('.dot').forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide(index + 1);
    });
});

function showSlides(n) {
    const slides = document.getElementsByClassName('slide-image');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    Array.from(slides).forEach(slide => slide.style.display = 'none');
    Array.from(dots).forEach(dot => dot.className = dot.className.replace(' active', ''));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function sliderAutoPlay() {
    plusSlides(1);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(sliderAutoPlay, 3000);
}
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

document.querySelector('.image-slider').addEventListener('mouseenter', function() {
    stopAutoPlay();
});
document.querySelector('.image-slider').addEventListener('mouseleave', function() {
    startAutoPlay();
});

startAutoPlay();