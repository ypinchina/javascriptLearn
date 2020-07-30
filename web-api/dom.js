//操作DOM的JS学习
let div1Id = document.getElementById('div1')//元素
console.log('div1Id', div1Id)
let divTag = document.getElementsByTagName('div') //集合
console.log('divLength', divTag.length)
console.log('div2', divTag[1])

let divClassName = document.getElementsByClassName('container')//集合
console.log('divLength', divClassName.length)
console.log('div2', divClassName[1])

let pTag = document.querySelectorAll('p')//集合
let pTag1 = pTag[0]
//porperty方式
pTag1.style.color = 'red'
pTag1.className = '第一个段落'
//attribute方式
pTag1.setAttribute('data-line', '5days')
console.log(pTag1.getAttribute('data-line'))

pTag1.setAttribute('style', 'color: blue')
console.log(pTag1.getAttribute('style'))