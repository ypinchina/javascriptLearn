class Student {
  constructor(name, number) {
    this.name = name 
    this.number = number
  }
  sayHi() {
    console.log(`姓名：${this.name}, 学号：${this.number}`)  
  }
}


let xialuo = new Student('xialuo', 55)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()



let madongmei = new Student('madongmei', 14)
console.log(madongmei.name)
console.log(madongmei.number)
madongmei.sayHi()
