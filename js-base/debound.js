//防抖
let input = document.getElementById('inputText')
let timer = null
/*input.addEventListener('keyup', function() {
  // console.log(this.value)
  if(timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(()=>{
      console.log(this.value)
      timer = null
    }, 500)

})*/

function debound(fn, delay = 500) {
//防抖方法
  // timer是闭包里面的
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

input.addEventListener('keyup', debound(() => {
  console.log(input.value)
}, 500))