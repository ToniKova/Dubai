// Седект со странами
const openBtn = document.querySelector('.header__dropdown-dtn')
const oneCastomSelect = document.querySelector('.header__dropdown-list')
const dropdownItem = document.querySelectorAll('.header__dropdown-item')
const dropdown = document.querySelector('.header__dropdown')

openBtn.addEventListener('click', () => {
  dropdown.classList.toggle('arrow-active')
  oneCastomSelect.classList.toggle('dropdown-open')
})

dropdownItem.forEach(item => {
  item.addEventListener('click', (e) =>{
    e.stopPropagation() //метод что бы событие не перебивало клик друго го события
    openBtn.innerText = item.innerText 
    oneCastomSelect.classList.remove('dropdown-open')
    dropdown.classList.remove('arrow-active')
  })
})


// Селект с языками
const lengBtn = document.querySelector('.header-leng__dropdown-btn')
const lengDropdown = document.querySelector('.header__dropdown-leng')
const lenglist = document.querySelector('.header-leng__dropdown-list')
const lengItem = document.querySelectorAll('.header-leng__dropdown-item')

lengBtn.addEventListener('click', () => {
  lengDropdown.classList.toggle('arrow-active')
  lenglist.classList.toggle('dropdown-open')
})


lengItem.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
    lengBtn.innerText = item.innerText
    lenglist.classList.remove('dropdown-open')
    lengDropdown.classList.remove('arrow-active')
  })
})


// слушатель клика вне кнопки, что бы закрыть дропдаун
// на первый кастомный селек
document.addEventListener('click', (e) => {
  if (e.target !== openBtn ) {
    oneCastomSelect.classList.remove('dropdown-open')
    dropdown.classList.remove('arrow-active')
  }
})
// и на второй кастомный селект
document.addEventListener('click', (e) => {
  if (e.target !== lengBtn ) {
    lenglist.classList.remove('dropdown-open')
    lengDropdown.classList.remove('arrow-active')
  }
})


