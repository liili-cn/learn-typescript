// 名义类型
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

// 结构化类型
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

function printCar2(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar2(new Car()); // Fine
printCar2(new Truck()); // Fine
printCar2(vehicle); // Fine

// 传递给 printCar 的参数可以描述为
// { all values which contain
//     a make  property which is a string
// and a model property which is a string
// and a year  property which is a number }
