// 深拷贝
const obj1 = {
  name: 'xiaoming',
  age: 20 ,
  adress: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c'] 
}
const obj2 = obj1
obj1.adress.city = 'wuzhou'
console.log(obj2.adress.city)

/**
* (深拷贝)
**/
function deepClone(obj) {
  let obj1 = new obj.constructor
  //判断传入的是不是对象。若不是对象类型就直接返回，不需要做深拷贝
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }
  if(obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      obj1[key] = deepClone(obj[key])
    }
  }
  return obj1
}
let obj3 = deepClone(obj1)
console.log(obj1.adress.city)
obj1.adress.city = 'shanghai'
console.log(obj3.adress.city)