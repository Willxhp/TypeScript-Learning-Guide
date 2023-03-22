// 类型别名就是为任意类型起别名，可以简化某些复杂类型的使用
// 使用type关键字来创建类型别名，类型别名可以是任意合法的变量名称
// 创建类型别名后，直接使用该类型别名作为变量的类型注解即可
type CustomArr = (number | string)[]
let arr1: CustomArr = [1, 2, 3, 'a']
let arr2: CustomArr = ['a', 'b']