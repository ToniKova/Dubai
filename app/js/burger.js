const burgerBtn = document.querySelector('.header__burger-btn')
const burgerMenu = document.querySelector('.dubai__burger-menu')
const burgerCloseBtn = document.querySelector('.dubai__close-btn')

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active')

})

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-active')
})