// 索引查询类型是用来查询对象类型中某个属性的类型
type Props = {
  a: number
  b: string
  c: boolean
}
// Props['a']表示查询类型Props中属性'a'所对应的类型
type TypeA = Props['a']
// 等同于 type TypeA = number
// []中的属性必须存在于被查询的类型中，否则会报错

// 索引查询类型也可以同时查询多个属性
type TypeB = Props['a' | 'b']
// 等同于 type TypeB = string | number
type TypeC = Props[keyof Props]
// 等同于 type TypeC = string | number | boolean