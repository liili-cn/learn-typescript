// 数组
const fileExtensions = ["js", "ts"];
type FileExtensios = string[];

const cars = [{ make: "Yoyota", model: "Corolla", year: 2002 }];
type Cars = { make: string; model: string; year: number }[];

// 第二种写法：使用 TypeScript 内置的 Array 接口
let arr: Array<number | string>;

// 多维数组
let multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];

export { fileExtensions, cars, arr, multi };
export { type FileExtensios, type Cars };
