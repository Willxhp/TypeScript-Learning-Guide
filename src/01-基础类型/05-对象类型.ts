// 对象的类型就是描述对象的结构，即对象有什么类型的属性和方法
// 直接使用{}来描述对象结构。属性采用属性名:类型的形式，方法采用方法名():返回值类型的形式
// 在一行代码中指定对象的多个属性类型时，使用;或,进行分隔
let person: { name: string; age: number; sayHi(name: string): void } = {
  name: 'Willxhp',
  age: 18,
  sayHi(name) {
    console.log('hello,', name)
  }
}
// 如果一行代码只指定一个属性类型，则可以去掉;或,
let otherPerson: {
  name: string
  age: number
  // sayHi(name: string): void
  // 方法的类型也可以使用箭头函数形式
  sayHi: (name: string) => void
} = {
  name: 'Willxhp',
  age: 18,
  sayHi(name) {
    console.log('hello,', name)
  }
}

// 对象的属性和方法也可以是可选的，可选属性的语法与函数类型的可选参数相同
function myAxios(config: {url: string; method?: string}): void {
  console.log(config.url, config.method)
}