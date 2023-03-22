// 任意的js字面量都可以作为类型使用
// 因为使用const关键字声明的变量值不能变化，所以const声明的基本类型变量即为字面量类型
let str1 = 'Hello World' // 类型为string
// 字符串字面量类型
const str2 = 'Hello World' // 类型为'Hello World'
let str3: 'abc' = 'abc'
// 数字字面量类型
let age: 18 = 18 // 类型为18
// 布尔字面量类型
let isLoading: true = true
// 数组字面量类型
let arr: [1, 2, 3] = [1, 2, 3]
// 对象字面量类型
let obj: { name: 'Willxhp', age: 18 } = { name: 'Willxhp', age: 18 }
// bigint字面量类型
let bigNum: 23n = 23n

// 字面量类型一般与联合类型一起使用
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}
changeDirection('left')