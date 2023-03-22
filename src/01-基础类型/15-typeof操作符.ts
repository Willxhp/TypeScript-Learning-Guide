// ts中的typeof运算符既有js中的功能，而且可以在类型上下文中引用变量或属性的类型
// 可以根据已有变量的值，获取该值的类型来简化类型书写
// typeof出现在类型注解的位置，即参数名称的冒号后面，所处的环境就是在类型上下文

let p = { x: 1, y: 2 }
function formatPoint(point: typeof p) {
  return point
}
// 与下方写法相同
// function formatPoint(point: { x: number, y: number }) { return point }

function add(num1: number, num2: number) {
  return num1 + num2
}

// typeof只能用来查询变量或属性的类型，无法查询其他形式的类型，如函数调用的类型
let sub: typeof add = (num1, num2) => {
  return num1 - num2
}
// let a: typeof add(1,2) // 报错