// 映射类型是基于旧类型创建新类型（新类型一般为对象类型），减少代码重复
// 旧类型只能是string|number|symbol的联合类型
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { [key in PropKeys]: number }
// 等价于 type Type1 = { x: number, y: number, z: number }

// 映射类型只能用于类型别名，不能用于接口
// interface Type2 { [key in PropKeys]: number } // 报错

// 如果要根据对象类型来创建新类型，则需要使用keyof关键字
type Props = {
  x: number
  y: string
  z: boolean
}
type Type3 = { [key in keyof Props]: number }
// 同样可以使用接口或类来创建新类型
interface Props2 {
  a: number
  b: string
}
type Type4 = { [key in keyof Props2]: string }
class Props3 {
  c: number
  d: boolean
}
type Type5 = { [key in keyof Props3]: boolean }

// 泛型工具类型都是基于映射类型所实现的
type myPartial<T> = {
  [P in keyof T]?: T[P]
}
// T[P]表示获取T中每个键对应的值
