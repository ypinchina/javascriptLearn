//DOM操作性能
let ulList = document.getElementById('ulList')
let fragment = document.createDocumentFragment()
for (let i = 0; i < 10; i++) {
  let li = document.createElement('li')
  li.innerHTML = `这是第${i}行`
  fragment.appendChild(li)
}
ulList.appendChild(fragment)