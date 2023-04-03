

const sliderOne = document.querySelector('.popular__slider-wrapper')


if (sliderOne) {
  let oneslider = new Swiper(sliderOne, {
    slideClass : 'popular__slider-item',
    wrapperClass : 'popular__slider-body',

    direction: 'vertical',//Горизонтолая прокрутка
    spaceBetween: 15,// Отступы между слайдами
    initialSlide: 2,//С какого слайда показывать
    loop: true,//бесконечная прокрутка


    navigation : {
      nextEl: '.next',
      prevEl: '.prev'
    },
  })
}