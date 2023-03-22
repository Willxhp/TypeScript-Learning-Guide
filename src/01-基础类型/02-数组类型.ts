// js中的对象类型object在ts中更加细化，每个具体的对象都有自己的类型语法
// 数组类型可以采用两种写法
// “类型+方括号”表示法
let nums: number[] = [1, 2, 3]
// 数组泛型表示法
let nums2: Array<number> = [1, 2, 3]
// 联合类型
let arr: (number | string)[] = [1, 2, 3, 'a', 'b']
// 如果不使用()，则表示变量类型为number或只含string类型的数组
let arr2: number | string[] = ['a', 'b', 'c']