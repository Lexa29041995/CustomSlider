let mySlider = document.querySelector('.main_slider');
mySlider.customSlider({
    slideWidth: 550,
    maxSlides: 1,
    slidesHeight: 300,
    navs: true,
    loop: true,
    autoplay: false,
    timeout: 500,
    dots: false,
    margin: 20,
    onHover: true,
});

let newsSlider = document.querySelector('.news_slider');
newsSlider.customSlider({
    slideWidth: 450,
    maxSlides: 1,
    slidesHeight: 200,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 3000,
    dots: true,
    margin: 50,
    onHover: true,
});