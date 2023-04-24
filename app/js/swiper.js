

// const sliderOne = document.querySelector('.popular__slider-wrapper')
// if (sliderOne) {
//   let oneSlider = new Swiper(sliderOne, {
//     slideClass : 'popular__slider-item',
//     wrapperClass : 'popular__slider-body',

//     direction: 'vertical',//Горизонтолая прокрутка
//     spaceBetween: 15,// Отступы между слайдами
//     initialSlide: 0,//С какого слайда показывать
//     loop: true,//бесконечная прокрутка

//     navigation : {
//       nextEl: '.next',
//       prevEl: '.prev'
//     },
//   })
// }



// const sliderTwo =  document.querySelector('.brand-slider__slider-wrapper')

// if (sliderTwo) {
//   let twoSlider = new Swiper(sliderTwo, {
//     slideClass : 'brand-slider__slider-item',
//     wrapperClass : 'brand-slider__slider-body',
//   }) 
// }



// const sliderTwo = document.querySelector('.swiper')
// if (swiperTwo) {
//   let newSwiper = new Swiper(sliderTwo , {
//   })
// }

const sliderTwo = document.querySelector('.swiper')


if (sliderTwo) {
  let newSwiper = new Swiper(sliderTwo , {
    loop: true, // Бесконечная прокрутка 
    slideToClickedSlide: true, // Переключение по клику на слайдер 
    spaceBetween: 100, // Растояние между слайдами 
    slidesPerView : 'auto', // Сколько слайдом будет видно 
    // loopedSlides: 3,
    mousewheel: {
      sensitivity: 1,
    }
  })
}