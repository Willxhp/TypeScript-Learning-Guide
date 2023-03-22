// 枚举的功能类似于字面量类型+联合类型组合的功能，可以表示一组明确的可选值
// 枚举定义一组命名常量，它描述一个值，该值可以是这些命名常量中的一个
// 使用enum关键字定义枚举，约定枚举名称、枚举中的值以大写字母开头
enum Direction {
  Left,
  Right,
  Up,
  Down
}
// 形参的类型为枚举，那么实参的值就应该是枚举中的任意一个
function changeDirection(direction: Direction) {
  console.log(direction)
}
// 访问枚举成员使用点语法
changeDirection(Direction.Down)

// 枚举成员是有值的，默认为从0开始自增的数值，把枚举成员的值为数字的枚举称为数字枚举
// 也可以给枚举中的成员初始化值，没有初始化值的成员，会根据第一个成员的值进行自增长
enum newDirection {
  Left = 10,
  Right, // 11
  Up = 11,
  Down // 12
}

// 字符串枚举，没有自增长行为，所以字符串枚举的每个成员必须有初始值
enum otherDirection {
  Left = 'LEFT',
  Right = 'RIGHT',
  Up = 'UP',
  Down = 'DOWN'
}

// 枚举不仅用作类型，还提供值，所以在被编译为js代码时，枚举类型不会被移除，而是会被编译为js代码
// 枚举在编译时会被编译为一个对象
console.log(otherDirection) // { Left: 'LEFT', Right: 'RIGHT', Up: 'UP', Down: 'DOWN' }
