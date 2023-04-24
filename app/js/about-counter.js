

const numCounter = document.querySelectorAll('.about__statistics-title')
const about = document.querySelector('.about') //секция где находятся счетчики 

let startAnimation = true

window.addEventListener('scroll',() => {
  let scrollTop = window.scrollY
  let aboutTop = about.offsetHeight
  if (scrollTop >= aboutTop) {
    startCounter()
  } 
})

function startCounter () {
  if (startAnimation) {
    let interval = 2000 //Время за которое будут работать счетчик
    numCounter.forEach(item => {
      let startValue = 0
      let endValue = parseInt(item.getAttribute('data-count'))
      let duration = Math.floor(interval / endValue)
      let counter = setInterval(function() {
        startValue += 1
        item.textContent = startValue
        if (startValue == endValue) {
          clearInterval(counter)
        }
      },duration)
    })
    startAnimation = false 
  } else {
    
  }
}



