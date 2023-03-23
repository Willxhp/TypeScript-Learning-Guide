// 当无法确定对象中有哪些属性（或者说对象中可以出现任意多个属性，此时就需要用到索引签名类型
// 使用[key: string]来约束接口中允许出现的属性名称，表示只要是string类型的属性名称，都可以出现在对象中
// key只是一个占位符，可以换成任意合法的变量名称

interface AnyObject {
  [key: string]: number
}

let obj: AnyObject = {
  a: 1,
  b: 2
}

// 在js中数组是一类特殊的对象，数组的键（索引）是数值类型
// ts在实现数组时，在数组对应的泛型接口中，也用到了索引类型签名
interface MyArray<T> {
  [n: number]: T
}
let arr: MyArray<number> = [1]