let arr = [10, 20, 30]
/*let arr1 = arr.pop()
console.log(arr, arr1)

arr = [10, 20]  返回值 arr1 = 30
*/
// pop方法 刨除原数组最后一个元素 返回值就是被刨除的元素  会对原数组造成影响




/*let arr1 = arr.push(40)

console.log(arr, arr1)

push 方法 给数组末尾推入一个新的元素，改变原数组的值。 返回值是新数组的Length值

*/



/*let arr1 = arr.unshift(5)
console.log(arr, arr1)

unshift()方法  在原数组的头部添加一个新的元素，给变原数组，返回值是新数组的
Length值

*/

let arr1 = arr.shift()
console.log(arr, arr1)

/*shift方法 是从元素组的头部卸载第一个元素 改变原数组， 返回值是被卸载的那个元素*/




//纯函数：不改变原数组（没有副作用）， 返回值是一个数组


// concat
let brr = [10, 20, 30,  40, 50]
let brr1 = brr.concat([40, 50])
console.log(brr, brr1)
// brr = [10, 20, 30] brr1 = [10, 20, 30, 40, 50]

// map()
let brr2 = brr.map((item) => {
  return item * 10
})
console.log(brr, brr2)
// brr = [10, 20, 30] brr2 = [100, 200, 300]


let brr3 = brr.filter((item) => {
  return item < 25
})
console.log(brr, brr3)
//[10, 20, 30]    [10, 20]

let brr4 = brr.slice(-2)
console.log(brr, brr4)
//slice方法类似于深拷贝

let crr = [10, 20, 30, 40, 50]
let crr1 = crr.splice(0,2 , '1', 'b', 'c')

console.log(crr, crr1)

//以下是非纯函数
// pop shift push unshift
// forEach
// every some 
// reduce