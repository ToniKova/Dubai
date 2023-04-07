const tabsBtn = document.querySelectorAll('.gallery__btn-tabs')
const tabsWrapper = document.querySelectorAll('.gallery__wrapper-tabs')



tabsBtn.forEach(item => { //Проходим циклом по всем кнопкам
  item.addEventListener('click', () => { //Вешаем на кажду кнопку клик
    let currentBtn = item // Сохраняем в переменную кнопку на котороую кликнули
    let tabId = currentBtn.getAttribute('data-btn') //Находим дата атрибут кнопки 
    let currentTab = document.querySelector(tabId) //Находим таб который будем показывать 

    if (!currentBtn.classList.contains('btn-active')) {// Условие, если у кнопки нету класса активности то выполни эти действия.
      tabsBtn.forEach(item => { //Проходимся по всем кнопкам циклом
        item.classList.remove('btn-active')//удаляем класс активности
      })
  
      tabsWrapper.forEach(item => { //Проходимся по всем табам 
        item.classList.remove('tabs-active')  //Удаляем ксласс активности с таба
      })

      currentBtn.classList.add('btn-active') // Добавлем класс активности кнопке
      currentTab.classList.add('tabs-active') //Добавляем класс активности табу 
    }
  })
})