// 函数声明与函数表达式的区别

//函数声明, 函数声明会提升

say()

function say() {
  console.log('ok')
}



//函数表达式  不会变量提升  

//Uncaught TypeError: sayHi is not a function 报错了
//此处认为sayHi是undefind 所以undefind is not a function
/*sayHi() 

var sayHi = function () {
  console.log('hi')
}*/


//Uncaught ReferenceError: Cannot access 'sayHi1' before initialization
//当用let和const时 则报这个错
sayHi1() 

let sayHi1 = function () {
  console.log('hi')
}