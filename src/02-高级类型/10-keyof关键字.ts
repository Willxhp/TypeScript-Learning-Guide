// 泛型的类型变量可以有多个，两个类型变量之间用逗号分隔，类型变量之间还可以约束
// keyof关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型

// 创建一个函数来获取对象中属性的值
// Key只能是Type所有键中的任意一个
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

getProp({name: 'Willxhp', age: 18}, 'name')
// 对于数组和字符串来说，keyof关键字不仅可以获取到所有的属性名，还可以是数字，表示索引
getProp(['a'], 1)
getProp('abc', 1)

let personDetail: keyof {name: string, age: number}
// 等价于 let personDetail: 'name' | 'age'