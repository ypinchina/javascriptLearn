let a  = [30, 30, 20 ,10 ,50, 40 ,60, 60]
/*
function unique(arr) {
 let b = []
 arr.forEach(item => {
  if(b.indexOf(item) < 0) {
    b.push(item)
  }
 })
 return b
}

console.log(unique(a))*/


function unique (arr) {
  let set = new Set(arr)
  return [...set]
}
console.log(unique(a))