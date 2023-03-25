const openBtn = document.querySelector('.header__dropdown-dtn')
const oneCastomSelect = document.querySelector('.header__dropdown-list')
const dropdownItem = document.querySelectorAll('.header__dropdown-item')

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('arrow-active')
  oneCastomSelect.classList.toggle('dropdown-open')
})

dropdownItem.forEach(item => {
  item.addEventListener('click', () =>{
    openBtn.innerText = item.innerText 
    oneCastomSelect.classList.remove('dropdown-open')
    openBtn.classList.remove('arrow-active')
  })
})

