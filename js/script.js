let mySlider = document.querySelector('.main_slider');
mySlider.customSlider({
    slideWidth: 550,
    maxSlides: 2,
    slidesHeight: 300,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 2000,
    dots: true,
    margin: 10,
    onHover: true,
});
