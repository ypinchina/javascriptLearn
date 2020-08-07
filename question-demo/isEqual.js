let a = {
  b: 2,
  c: {
    c1: 'aat',
    c2: 'mac'
  },
  d: null
}

let b = {
  b: 2,
  c: {
    c1: 'aat',
    c2: 'mac'
  },
  d: null
}

console.log(a === b)
//根据深拷贝的知识 是false


function isObj(obj) {
  if(typeof obj === 'object' && obj !== null) {
    return true
  } else {
    return false
  }
}
function isEqual(obj1, obj2) {
  if(!isObj(obj1) || !isObj(obj2)) {
    return false
  }
  if(obj1 === obj2) {
    return true
  }
}
console.log(isEqual(a, b))