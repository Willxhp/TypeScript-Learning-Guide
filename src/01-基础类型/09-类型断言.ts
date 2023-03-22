// 类型断言可以用来手动指定一个值的类型，有以下两种写法
// 值 as 类型
// <类型>值 改写法在React的tsx语法中会产生冲突，所以不推荐使用

// 类型断言有以下几种用途
// 1. 将一个联合类型断言为其中一个类型
// 当ts不确定一个联合类型的变量到底是哪个类型的时候，只能访问此联合类型的所有类型中共有的属性或方法
interface Cat {
  name: string
  run(): void
}
interface Dog {
  name: string
  swim(): void
}
function isDog(animal: Cat | Dog) {
  // 如果不使用类型断言，会报错，Dog中没有run方法
  if (typeof (animal as Cat).run === 'function') return true
  return false
}

// 2. 将一个父类断言为更加具体的子类
// const aLink = document.getElementById('link') // 获取到的aLink类型为HTMLElement，是一个父类，没有a标签的href属性
const aLink = document.getElementById('link') as HTMLAnchorElement // 将aLink断言为更加具体的类型，就可以访问到href属性
// 可以通过console.dir来观察DOM元素的类型