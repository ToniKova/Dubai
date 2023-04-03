const burgerBtn = document.querySelector('.header__burger-btn')
const burgerMenu = document.querySelector('.dubai__burger-menu')
const burgerCloseBtn = document.querySelector('.dubai__close-btn')
const body = document.body 

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active')
  body.classList.remove('noskroll')

})

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-active')
  body.classList.add('noskroll')

})