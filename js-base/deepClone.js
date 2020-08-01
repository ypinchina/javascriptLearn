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
function deepClone(obj = {}) {
  //判断传入的是不是对象。若不是对象类型就直接返回，不需要做深拷贝
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  //初始化返回对象
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    return result[key] = deepClone(result)
  }

}