// unknown表示未知类型的值
let a: unknown
a = 1
a = '1'
a = true

let b: any = 1

let s: string

// any类型的变量可以赋值给任何变量，而unknown类型的变量不能赋值给其他类型的变量
s = b // 不会报错
// s = a // 报错
a = 'hello'
// 如果要把unknown类型的变量赋值给其他类型的变量，需要首先判断变量类型或进行类型断言
if (typeof a === 'string') {
  s = a
}

s = a as string
// s = <string>a
