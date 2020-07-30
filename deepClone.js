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
obj1.name = 'fff'
console.log(obj2)