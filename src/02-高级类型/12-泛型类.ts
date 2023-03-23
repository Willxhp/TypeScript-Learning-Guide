// 类似于泛型接口，在class名称后面添加<类型变量>，这个类就变成了泛型类
class GenericNumber<NumType> {
  defaultValue: NumType
  constructor(value: NumType) {
    this.defaultValue = value
  }
  add(x: NumType) : NumType {
    return x
  }
}

const myNum = new GenericNumber<number>(10)
// 可以明确推断类型的情况下可以省略<类型变量>
const newNum = new GenericNumber(100)