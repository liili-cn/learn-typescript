// 对象
let car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
};

// 一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性
car = { make: "Honda", model: "Accord" }; // 报错
car = { make: "Honda", model: "Accord", year: 2017, x: 220 }; // 报错
car = { make: "Honda", model: "Accord", year: 2017 };

// 读写不存在的属性也会报错、删除类型声明中存在的属性会报错
console.log(car.x); // 报错

delete car.year; // 报错
car.year.toString();

// 可选属性
function printCar(car: Car) {
  let str = "`${car.make} $car.model $car.year`";
  if (typeof car.chargeVoltage !== undefined) str += `// ${car.chargeVoltage}v`;
  console.log(str);
}

printCar({ make: "Honda", model: "Accord", year: 2017 });
printCar({ make: "Tesla", model: "Model 3", year: 2020, chargeVoltage: 220 });
printCar({ make: "Tesla", model: "Model 3", year: 2020, color: "red" }); // 报错

// 读取可选属性之前，必须检查一下是否为 undefined
car.chargeVoltage.toString(); // 报错
if (car.chargeVoltage !== undefined) {
  console.log(car.chargeVoltage.toString());
}

// 属性名的索引类型
const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};
