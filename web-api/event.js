//事件 事件代理 事件绑定



/*function bindEvent(target, event, fn) {
//参数分别是： 触发对象， 触发事件 ，回调函数
  target.addEventListener(event, fn)
}*/
//封装通用事件绑定方法

function bindEvent(event, type, daili, fn) {
  if (fn == null) {
    fn = daili
    daili =null
  }
  if (daili != null) {

  }
  

}

let btn = document.getElementById('btn')

bindEvent(btn, 'click', e => {
//  console.log(e)
 e.preventDefault()//阻止默认行为 超链接跳转

 e.stopPropagation()//阻止冒泡
})


let divBox = document.getElementById('divBox')

bindEvent(divBox, 'click',  , event => {

})
