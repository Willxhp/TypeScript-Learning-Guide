// 默认情况下，泛型函数的类型变量Type可以代表多个类型，这导致无法访问任何属性
// 此时，需要为泛型添加约束来收缩类型，主要有两种方式
// 1. 指定更加具体的类型
// 将类型修改为Type[]（Type类型的数组）
function id<Type>(value: Type[]): Type[] {
  console.log(value.length)
  return value
}

// 2. 添加约束
// 创建描述约束的接口，通过extends关键字使用该接口，为泛型添加剂约束
// 该约束表示传入的类型必须具有length属性
interface ILength {
  length: number
}
function fn<Type extends ILength>(value: Type): Type {
  console.log(value.length)
  return value
}
fn('abc')
fn(['a', 'b'])
let obj = {
  length: 1,
  name: 'Willxhp'
}
fn(obj)