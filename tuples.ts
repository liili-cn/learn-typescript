// 元组
let myCar = [2002, "Toyota", "Corolla"];
// const [year, make, model] = car; // 报错
myCar = [2017, "Honda", "Accord", "Sedan"]; // 不报错

let yourCar: [number, string, string] = [2002, "Toyota", "Corolla"];
yourCar = ["Honda", 2017, "Accord"]; // 报错
yourCar = [2017, "Honda", "Accord", "Sedan"]; // 报错
const [year, make, model] = yourCar;

// 只读元组
const roNumPair: readonly [number, number] = [4, 5];
roNumPair.length;

roNumPair.push(6); // 报错
roNumPair.pop(); // 报错

// 第二种写法：使用工具类型 Readonly<T>
type t = Readonly<[number, string]>;
