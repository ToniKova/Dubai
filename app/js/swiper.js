

// const sliderOne = document.querySelector('.popular__slider-wrapper')
const sliderTwo =  document.querySelector('.brand-slider__slider-wrapper')

if (sliderTwo) {
  let twoSlider = new Swiper(sliderTwo, {
    slideClass : 'brand-slider__slider-item',
    wrapperClass : 'brand-slider__slider-body',
  }) 
}


// if (sliderOne) {
//   let oneSlider = new Swiper(sliderOne, {
//     slideClass : 'popular__slider-item',
//     wrapperClass : 'popular__slider-body',

//     direction: 'vertical',//Горизонтолая прокрутка
//     spaceBetween: 15,// Отступы между слайдами
//     initialSlide: 2,//С какого слайда показывать
//     loop: true,//бесконечная прокрутка


//     navigation : {
//       nextEl: '.next',
//       prevEl: '.prev'
//     },
//   })
// }
