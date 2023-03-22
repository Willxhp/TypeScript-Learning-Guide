// never表示永远不会返回结果，只能用于函数返回值，一般用于某些会报错的函数
function fn():never {
  throw new Error()
}