

// const wrapper = document.querySelector('.wrapper')

// window.addEventListener('scroll', function() {
//   const scrolled = window.scrollY
//   console.log(scrolled)
// })






// function activeCounter( numberCount ) {
// }
// activeCounter()

const counter = document.querySelectorAll('.about__statistics-title')
counter.forEach(item => {
  console.log(item.dataset)
})

// 




// const num = setInterval(countNum, 100)
// let count = 0

// function countNum (){
//   count++
//   const yearNum = document.querySelector('.about__statistics-title')
//   yearNum.innerHTML = count
  
//   if (count === 10) {
//     clearInterval(num)
//   }
// }