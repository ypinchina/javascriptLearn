//dom节点的添加 删除及移动
let div1 = document.getElementById('div1')
//创建节点
let pNew = document.createElement('p')

pNew.innerHTML = '这是新创建并添加的新元素'
//插入节点
div1.appendChild(pNew)

//移动节点
let p1 = document.getElementById('p1')
let div2 = document.getElementById('div2')
div2.appendChild(p1)

//获取父元素列表
console.log(p1.parentNode)

//获取子元素列表
let childTag = div1.childNodes
console.log(childTag)
//过滤 只获取纯标签
let childTagArr = Array.prototype.slice.call(childTag)
let newChildTagArr = childTagArr.filter(item => {
  if (item.nodeType === 1) {
    return true
  } else {
    return false
  }
})
console.log(newChildTagArr)

//删除节点
div1.removeChild(newChildTagArr[0])