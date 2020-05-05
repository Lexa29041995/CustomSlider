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

// let newsSlider = document.querySelector('.news_slider');
// newsSlider.customSlider({
//     slideWidth: 450,
//     maxSlides: 1,
//     slidesHeight: 200,
//     navs: true,
//     loop: true,
//     autoplay: true,
//     timeout: 3000,
//     dots: true,
//     margin: 0,
//     onHover: true,
// });