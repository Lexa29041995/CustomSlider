const defaultSettings = {
    slideWidth: 300,
    slideHeight: 'auto',
    maxSlides: 1,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 3000,
    dots: true,
    margin: 0,
    onHover: true,
}

let customSliderArr = document.querySelectorAll('.custom_slider');

customSliderArr.forEach(item => item.customSlider = function (sliderSettings = {}) {
    let moveNum = 0;
    let modalWrapper = document.querySelector('.modal_wrapper');
    let largeImg = document.querySelector('.modal_wrapper .large_img');
    const slideWidth = sliderSettings.slideWidth || defaultSettings.slideWidth;
    const slideHeight = sliderSettings.slidesHeight || defaultSettings.slidesHeight;
    const maxSlides = sliderSettings.maxSlides || defaultSettings.maxSlides;
    const navs = sliderSettings.navs !== undefined ? sliderSettings.navs : defaultSettings.navs;
    const slides = item.querySelectorAll('div');
    const TotalLength = slides.length * slideWidth;
    const loop = sliderSettings.loop !== undefined ? sliderSettings.loop : defaultSettings.loop;
    const autoplay = sliderSettings.autoplay !== undefined ? sliderSettings.autoplay : defaultSettings.autoplay;
    const timeout = sliderSettings.timeout || defaultSettings.timeout;
    const dots = sliderSettings.dots !== undefined ? sliderSettings.dots : defaultSettings.dots;
    const margin = sliderSettings.margin || defaultSettings.margin;
    const onHover = sliderSettings.onHover !== undefined ? sliderSettings.onHover : defaultSettings.onHover;

    buildSlider(item, slideWidth, slideHeight, slides, navs, dots, margin);



    showModal;

    let outerContainer = item.querySelector('.outer_container');
    outerContainer.style.width = `${slideWidth * maxSlides + margin*(maxSlides-1)}px`;

    if (maxSlides > 1 && margin > 0) {
        outerContainer.style.width = `${slideWidth} * ${maxSlides} + ${margin}`;
        let outerContainerWidht = outerContainer.style.width;
        console.log(outerContainerWidht);
    }

    if (navs) {
        let nextSlideBtn = item.querySelector('.custom_slider .next_slide');
        let prevSlideBtn = item.querySelector('.custom_slider .prev_slide');

        nextSlideBtn.addEventListener('click', nextSlideCLick);
        prevSlideBtn.addEventListener('click', prevSlideCLick);
    };

    function nextSlideCLick(e) {
        e.preventDefault();
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if ((moveNum - slideWidth) > -TotalLength) {
            console.log(slideWidth)
            moveNum = moveNum - slideWidth - margin;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if (loop) {
            moveNum = 0;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        };
    };

    function prevSlideCLick(e) {
        e.preventDefault();
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        if (moveNum < 0) {
            moveNum = moveNum + slideWidth + margin;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if (loop) {
            moveNum = -TotalLength + slideWidth;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        };
    };

    function showModal(e) {
        let thisImg = e.target.closest('img');
        console.log(thisImg)
        largeImg.append(thisImg);
        modalWrapper.classList.add('active');
    };

    function autoPlay() {
        if (autoplay === true || navs === false) {
            function moveSlide() {
                moveNum = moveNum - slideWidth- margin;
                let slider = item.closest('.custom_slider')
                let innerContainer = slider.querySelector('.inner_container')
                innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            }
            let timerStop = setInterval(moveSlide, timeout);
            setTimeout(() => {
                clearInterval(timerStop)
            }, timeout * (slides.length - 1));
        }
    };

    autoPlay()

    // modalWrapper.addEventListener('click', (e) => {
    //     let modal = document.querySelector('.modal');
    //     if (e.target !== modal) {
    //         leftCol.innerHTML ='';
    //         modalWrapper.classList.remove('active');
    //     };
    // });

    function buildSlider(slider, slideWidth, slideHeight, slides, navs, dots, marginRight) {
        slides.forEach(item => {
            item.classList.add('one_slide')
            item.style.width = `${slideWidth}px`;
            item.style.height = `${slideHeight}px`;
            item.style.marginRight = `${margin}px`;
        });

        slider.innerHTML = `
            <div class="outer_container">
                <div class="inner_container">
                    ${slider.innerHTML}
                </div>
            </div>
            `;
        if (navs) {
            slider.innerHTML = slider.innerHTML + `<div class="navs">
            <a href="#" class="prev_slide"><</a>
            <a href="#" class="next_slide">></a>
        </div>`
        }
        if (dots) {
            slider.innerHTML += `<div class="dots">
            
        </div>`
        }

    }
});