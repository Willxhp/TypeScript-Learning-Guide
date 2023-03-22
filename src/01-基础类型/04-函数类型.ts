// 函数的类型指的是参数的类型和返回值的类型
// 1. 分别指定参数的类型和返回值的类型
// 函数声明
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 函数表达式
const sub = (num1: number, num2: number): number => {
  return num1 - num2
}
const mul = function (num1: number, num2: number): number {
  return num1 * num2
}

// 2. 同时指定参数和返回值的类型，只适用于函数表达式，无法用于函数声明的形式
// 通过类似箭头函数形式的语法来为函数添加类型
const div: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 / num2
}
const div1: (num1: number, num2: number) => number = function (num1, num2) {
  return num1 / num2
}

// 3. 如果函数没有返回值，那么函数的返回值类型为void
function showName(name: string): void {
  console.log('hello,' + name)
}
showName('Willxhp')
// 可以将undefined赋值给void类型的变量
let myName: void = undefined

// 4. 可选参数：如果函数的某个参数可以传也可以不传，在给函数参数指定类型时需要使用可选参数
// 在可选参数名称后面添加?，可选参数只能出现在参数列表的最后
function mySlice(start?: number, end?: number): void {
  console.log('起始索引', start, '结束索引', end)
}

// 对于函数表达式，应尽量避免函数的返回值为void，否则会无法正确检测函数返回值是否正确
// 以下代码不会报错
// const fn: () => void = () => {
//   return 1
// }
// const fn: () => void = function() {
//   return 1
// }
// console.log(fn())