class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`)
  }
}

class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`名字：${this.name}， 学号：${this.number}`)
  }
}

let yipeng = new Student('yipeng', 55)
console.log(yipeng.name)
console.log(yipeng.number)
yipeng.eat()
yipeng.sayHi()

class Teacher extends People{
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teacher() {
    console.log(`${this.name}老师教${this.major}`)
  }
}

let ouYun = new Teacher('ouYun', 'English')
console.log(ouYun.name)
console.log(ouYun.major)
ouYun.eat()
ouYun.teacher()