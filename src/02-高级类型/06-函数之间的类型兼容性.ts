// 函数之间的兼容性需要考虑：参数个数、参数类型和返回值类型
// 1. 参数个数，参数多的兼容参数少的，即可以将参数少的函数赋值给参数多的函数
// 在js中省略用不到的函数参数是非常常见的，这样的使用方式促成了ts中函数类型之间的兼容性
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let fn1: F1 = (a) => { }
let fn2: F2 = fn1

// 2. 参数类型，相同位置的参数类型要相同（原始类型）或兼容（对象类型）
// 注意：作为函数参数的对象类型兼容规则与class或接口的兼容规则相反，即成员少的可以赋值给成员多的
// 可以将作为参数的对象拆开，把每个属性当做一个个参数，即仍然是参数少的可以赋值给参数多的
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}
type F3 = (p: Point2D) => void
type F4 = (p: Point3D) => void

let fn3: F3 = (p) => { }
let fn4: F4 = fn3

// 3. 返回值类型，只需要关注返回值类型本身即可
// 如果返回值类型是原始类型，则两个类型需要相同
// 如果返回值类型是对象类型，则成员多的可以赋值给成员少的（与对象类型兼容规则相同）
type F5 = () => string
type F6 = () => string

let fn5: F5 = () => ''
let fn6: F6 = fn5

type F7 = () => { name: string }
type F8 = () => { name: string, age: number }
let fn8: F8 = () => ({name: 'Willxhp', age: 18})
let fn7: F7 = fn8