// ts通过类型注解为变量添加类型约束，一旦约定了变量为什么类型，就只能给该变量赋值该类型的值
// ts中的原始类型包含number/string/boolean/null/undefined/symbol/bigint
// 类型注解与js中的类型名称相同
// 1. number类型
let age: number = 18
// 2. string类型
let myName: string = 'Willxhp'
// 3. boolean类型
let isLoading: boolean = true
// 4. null类型
let obj: null = null
// 5. undefined类型
let target: undefined = undefined
// 6. symbol类型
let s: symbol = Symbol()
// 7. bigInt类型
// let bigNumber: bigint = BigInt(23)
let bigNumber: bigint = 23n