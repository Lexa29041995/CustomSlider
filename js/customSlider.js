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
    console.log(slides)
    const TotalLength = slides.length * slideWidth;
    const loop = sliderSettings.loop !== undefined ? sliderSettings.loop : defaultSettings.loop;
    const autoplay = sliderSettings.autoplay !== undefined ? sliderSettings.autoplay : defaultSettings.autoplay;
    const timeout = sliderSettings.timeout || defaultSettings.timeout;
    const dots = sliderSettings.dots !== undefined ? sliderSettings.dots : defaultSettings.dots;
    const margin = sliderSettings.margin || defaultSettings.margin;
    const onHover = sliderSettings.onHover !== undefined ? sliderSettings.onHover : defaultSettings.onHover;

    buildSlider(item, slideWidth, slideHeight, slides, navs, margin);

    if (dots) {
        Dots();
    }

    let outerContainer = item.querySelector('.outer_container');
    outerContainer.style.width = `${slideWidth * maxSlides + margin*(maxSlides-1)}px`;

    if (maxSlides > 1 && margin > 0) {
        outerContainer.style.width = `${slideWidth} * ${maxSlides} + ${margin}`;
        let outerContainerWidht = outerContainer.style.width;
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

    let thisImg = item.querySelectorAll('.one_slide');

    function showModal() {
        thisImg.forEach(item => {
            item.addEventListener('click', () => {
                largeImg.append(item);
                item.style.width = '0';
                item.style.height = '0';
                item.style.marginRight = '0';
                modalWrapper.classList.add('active_window');
                let changeImg = document.querySelector('img');
                changeImg.classList.add('active_modal')
            });
        })
    };

    showModal();


    modalWrapper.addEventListener('click', (e) => {
        let exitBtn = document.querySelector('.exit_btn');
        if (e.target === exitBtn) {
            modalWrapper.classList.remove('active_window');
            let largeImageBlock = document.querySelector('.large_img');
            largeImageBlock.innerHTML = '';
        }
    });

    if (autoplay) {
        function moveSlide() {
            if ((moveNum - slideWidth) > -TotalLength) {
                moveNum = moveNum - slideWidth;
                let innerContainer = item.querySelector('.inner_container');
                innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            } else {
                moveNum = 0;
                let innerContainer = item.querySelector('.inner_container');
                innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            }
        }

        let timerId;
        let innerContainer = item.querySelector('.inner_container');
        let oneSlide = innerContainer.querySelectorAll('.one_slide')

        function stopMove() {
            timerId = setInterval(moveSlide, timeout);
        }
        stopMove()

        if (onHover) {
            oneSlide.forEach(item => {
                item.addEventListener('mouseover', () => {
                    setTimeout(() => {
                        clearInterval(timerId)
                    });
                })
                item.addEventListener('mouseout', () => {
                    stopMove()
                })

            })
        }
    }

    function Dots() {
        let customSlider = item;
        let innerContainer = item.querySelector('.inner_container');
        let generalDots = document.createElement('div');
        generalDots.classList.add('allDots');
        customSlider.append(generalDots);
        let dots = item.querySelectorAll('.one_slide');
        let arrayDots = []
        for (i = 0; i < dots.length; i++) {
            let dotsimg = document.createElement('div');
            dotsimg.classList.add('dot')
            generalDots.append(dotsimg);
            arrayDots.push(dotsimg);
            dotsimg.dataset.number = i;
        };
        let innerArray = Array.from(innerContainer.children);
        j = 0;
        innerArray.forEach(item => {
            item.dataset.number = j++;
        });
        item.addEventListener('click', (e) => {
            event = e.target;
            innerArray.forEach(item => {
                if ((event.getAttribute('data-number')) == (item.getAttribute('data-number'))) {
                    arrayDots.forEach(item => {
                        item.classList.remove('active_dot');
                    });
                    event.classList.add('active_dot');
                    innerContainer.style.transform = `translate(${-slideWidth *item.getAttribute('data-number')}px, 0)`
                }
            });
        });
    }


    function buildSlider(slider, slideWidth, slideHeight, slides, navs, marginRight) {

        slides.forEach(item => {
            item.classList.add('one_slide')
            item.style.width = `${slideWidth - margin*2}px`;
            item.style.height = `${slideHeight}px`;
            item.style.margin = `${margin}px`;
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
        </div>`;
        }
    }
});