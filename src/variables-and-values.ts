// 变量声明
let foo: string;

// 类型推断
let bar = 6;
bar = "warm"; // 报错

// 不可变的值类型（字面量类型），单个值也是一种类型，称为 “值类型”
const qar = 79;

// 类型作为一组允许的值
let temperature = 19;
let humidity = 79 as const;

temperature = 23;
temperature = humidity;
humidity = temperature; // 报错

humidity = 79; // 不报错
humidity = 78; // 报错

// 用集合来描述
let temp2 = 19; // temp2's type is { all numbers }
let humid2 = 79 as const; // humid2's type is { 79 }

// Is each member in { 23 } also in { all numbers }? ✅ YES
temp2 = 23;
// Is each member in { 79 } also in { all numbers }? ✅ YES
temp2 = humid2;
// Is each member in { all numbers } also in { 79 }? ❌ NO
humid2 = temp2;

// Is each member in { 79 } also in { 79 } ✅ YES
humid2 = 79;
// Is each member in { 78 } also in { 79 } ❌ NO
humid2 = 78;

// 隐式 any 和类型注解
// TypeScript 没有足够的信息去推断，所以给了最灵活的类型 `any`
let endTime;

// 想要更高的安全性，可以添加一个类型注解
let startTime: Date;

// 类型转换
// 强制编译器将值视为特定类型
let frontEndMastersFounding = new Date("Jan 1, 2012");
let date1 = frontEndMastersFounding;

let date2 = frontEndMastersFounding as any;

// 有时可以安全地转换为更通用的类型，但转换为更具体或无关的类型会有潜在风险
let date3 = "oops" as any as Date;
date3; // TypeScript thinks this is a Date now, but it's really a string

date3.toISOString(); // what do we think will happen when we run this? 💥

// 必须先向上转型再向下转型
let date4 = "oops" as Date; // 报错

// 函数参数和返回值
function add(a: number, b: number) {
  return a + b;
}
const result = add(3, "4"); // 报错

// function multiply(a: number, b: number): number {} // 报错
function multiply(a: number, b: number): number {
  return a * b;
}

export {
  foo,
  bar,
  qar,
  temperature,
  humidity,
  temp2,
  humid2,
  endTime,
  startTime,
  date1,
  date2,
  date3,
  date4,
  add,
  result,
  multiply,
};
