// 当一个对象类型被多次引用时，一般会使用接口来描述对象的类型
// 使用interface关键字来声明接口，接口名称可以是任意合法的变量名称
// 声明接口后，直接使用接口名称作为变量的类型
// 每一个属性类型之间的连接符与对象类型的要求相同
interface Person {
  name: string,
  age: number,
  sayHi(): void
}

let person: Person = {
  name: 'Willxhp',
  age: 18,
  sayHi() {
    console.log('Hello,world')    
  },
}

// 接口与类型别名的对比
// 相同点：两者都可以给对象指定类型
// 不同点：接口只能为对象指定类型，而类型别名可以为任何类型指定别名
type IPerson = {
  name: string
  age: number
}
let person1: IPerson = {
  name: 'Willxhp',
  age: 18
}

// 接口的继承
// 如果两个接口之间有相同的属性和方法，可以将公共的属性或方法抽离出来，通过继承来实现复用
interface point2D { x: number, y: number }
// interface point3D { x: number, y: number, z: number }
interface point3D extends point2D { z: number }

let point: point3D = {
  x: 1,
  y: 2,
  z: 3
}