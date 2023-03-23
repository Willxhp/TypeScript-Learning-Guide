// ts内置了一些常用的工具类型，来简化ts中的一些常见操作
// 它们都是基于泛型实现的，并且是内置的，可以在代码中直接使用
// 1. Partial
// Partial<Type>可以用来构造一个类型，将Type的所有属性设置为可选
interface Props {
  id: string
  children: number[]
}
type PartialProps = Partial<Props>

let obj1: Props = {
  id: '1',
  children: []
}
let obj2: PartialProps = {}

// 2. Readonly
// Readonly<Type>用来构造一个类型，将Type中的所有属性都设置为只读
type ReadonlyProps = Readonly<Props>
let obj3: ReadonlyProps = {
  id: '3',
  children: []
}
// obj3.id = '2' // 报错

// 3. Pick
// Pick<Type, Keys>从Type中选中一组属性来构造新类型
// 接收两个类型变量，第二个类型变量传入的属性只能是第一个类型变量中存在的属性
type PickPops = Pick<Props, 'id'>
let obj4: PickPops = {
  id: '4'
}

// 4. Record
// Record<Keys, Type>构造一个对象类型，属性键为Keys，属性类型为Type
// Record接收两个类型变量，分别表示对象有哪些属性以及属性的类型
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let obj5: RecordObj = {
  a: ['1'],
  b: ['2'],
  c: ['3']
}