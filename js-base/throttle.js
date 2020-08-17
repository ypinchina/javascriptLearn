let box = document.getElementById('box')

let timer = null
/*box.addEventListener('drag', function(e) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
        console.log(e.offsetX, e.offsetY)
        timer = null
    }, 200)
})*/
//节流
function throttle (fn, delay = 200) {
  let timer = null 
  return function() {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
    }, delay)
  }
}
box.addEventListener('drag', throttle(function (e){
    console.log(e.offsetX, e.offsetY)
}, 200))