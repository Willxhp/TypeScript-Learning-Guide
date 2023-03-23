// 接口也可以配合泛型来使用，以增加其灵活性，增强复用性
// 在接口名称的后面添加<类型变量>，那么这个接口就成为了泛型接口
// 接口的类型变量，对接口中所有的成员可见，即接口中所有的成员都可以使用类型变量
// 使用泛型接口，需要显示指定具体的类型
interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

let obj: IdFunc<number> = {
  id: (value) => value,
  ids: () => [1, 2, 3]
}
// ts中的数组实际上就是利用泛型接口实现的

// 类型别名同样可以与泛型结合使用
// 使用泛型类型别名，也需要显示指定具体的类型
type Type1<Type> = {
  id: Type
}
let obj2: Type1<number> = { id: 1 }