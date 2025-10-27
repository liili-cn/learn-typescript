// 联合类型（概念上）
// Evens = { 2, 4, 6, 8 }
// OneThroughFive = { 1, 2, 3, 4, 5 }
//
// OneThroughFive | Evens => { 1, 2, 3, 4, 5, 6, 8 }

type OneThroughFive = 1 | 2 | 3 | 4 | 5;

let lowNumber: OneThroughFive = 3;
lowNumber = 8; // 报错

type Evens = 2 | 4 | 6 | 8;

let evenNumber: Evens = 2;
evenNumber = 5; // 报错

let evenOrLowNumber = 5 as Evens | OneThroughFive;

// 通常出现在可以为不同的代码路径生成不同的值的控制流中
function flipCoin() {
  if (Math.random() > 0.5) return "heads"; // the "heads" branch
  return "tails"; // the "tails" branch
}

const outcome = flipCoin(); // "heads" | "tails"

// 结合元组使用
const success = [
  "success",
  { name: "Mike North", email: "mike@example.com" },
] as const;
const fail = ["error", new Error("Something went wrong!")] as const;

function maybeGetUserInfo() {
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}

const outcome2 = maybeGetUserInfo();
//     ^?

const [first, second] = outcome2;
first;
// ^?
second;
// ^?

// `Evens | OneThroughFive` 可以接收宽范围的值，
// 但由于允许这种灵活性，它不满足大多数 `print*` 函数的类型检查要求
function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughFive): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let x = 5 as Evens | OneThroughFive;

// What does Evens | OneThroughFive accept as values?
evenOrLowNumber = 6; //✔️ An even
evenOrLowNumber = 3; //✔️ A low number
evenOrLowNumber = 4; //✔️ A even low number

// What requirements can `Evens | OneThroughFive` meet?
printEven(x); // 报错
printLowNumber(x); // 报错
printEvenNumberUnder5(x); // 报错
printNumber(x);

// 使用类型守卫进行类型收窄
if (second instanceof Error) {
  // In this branch of your code, second is an Error
  second;
  // ^?
} else {
  // In this branch of your code, second is the user info
  second;
  // ^?
}

// 标记联合类型
if (first === "error") {
  // In this branch of your code, second is an Error
  second;
  // ^?
} else {
  // In this branch of your code, second is the user info
  second;
  // ^?
}

// 交叉类型（概念上）
// Evens = { 2, 4, 6, 8 }
// OneThroughFive = { 1, 2, 3, 4, 5 }
//
// OneThroughFive & Evens => { 2, 4 }

// 交叉类型
// 与联合类型相反，接收非常窄范围的值，
// 但正因如此，它可以满足下面所有四个 `print*` 函数的类型检查要求
let y = 4 as Evens & OneThroughFive;
let evenAndLowNumber: Evens & OneThroughFive;

// What does Evens & OneThroughFive accept as values?
evenAndLowNumber = 6; //✔️ An even
evenAndLowNumber = 3; //✔️ A low number
evenAndLowNumber = 4; //✔️ A even low number

// What requirements can `Evens & OneThroughFive` meet?
printEven(y);
printLowNumber(y);
printEvenNumberUnder5(y);
printNumber(y);

export {
  lowNumber,
  evenNumber,
  evenOrLowNumber,
  flipCoin,
  outcome,
  success,
  fail,
  maybeGetUserInfo,
  outcome2,
  first,
  second,
  printEven,
  printLowNumber,
  printEvenNumberUnder5,
  printNumber,
  x,
  y,
  evenAndLowNumber,
};
export { type OneThroughFive, type Evens };
