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
console.log(pTag)