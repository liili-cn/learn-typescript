// 名义类型系统都是关于名称的
// public class Car {
//   String make;
//   String model;
//   int make;
// }
// public class CarChecker {
//   // takes a `Car` argument, returns a `String`
//   public static String checkCar(Car car) {  }
// }
// Car myCar = new Car();
// // TYPE CHECKING
// // -------------
// // Is `myCar` type-equivalent to
// //     what `checkCar` wants as an argument?
// CarChecker.checkCar(myCar);

// 结构化类型系统都是关于结构的
class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};

function printCar(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar(new Car()); // Fine
printCar(new Truck()); // Fine
printCar(vehicle); // Fine

// 传递给 printCar 的参数可以描述为
// { all values which contain
//     a make  property which is a string
// and a model property which is a string
// and a year  property which is a number }

export {Car, Truck, vehicle, printCar};
