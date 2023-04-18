

const numCounter = document.querySelectorAll('.about__statistics-title')


let interval = 2000

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



