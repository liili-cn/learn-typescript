// 内置类型守卫
let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  let value: Date;
}
// typeof
else if (typeof value === "string") {
  let value: "pineapple";
}
// Specific value check
else if (value === null) {
  let value: null;
}
// Truthy/falsy check
else if (!value) {
  let value: undefined;
}
// Some built-in functions
else if (Array.isArray(value)) {
  let value: [number];
}
// Property presence check
else if ("dateRange" in value) {
  let value: {
    dateRange: [Date, Date];
  };
} else {
  let value: never;
}

// `value is Foo` 语法
interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: any;

// the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string" &&
    "year" in valueToTest &&
    typeof valueToTest["year"] === "number"
  );
}

// using the guard
if (isCarLike(maybeCar)) {
  maybeCar;
}

// `asserts value is Foo` 语法
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

// 结合 `#field` 使用
class Car8 {
  static #nextSerialNumber: number = 100;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  #serialNumber = Car8.#generateSerialNumber();

  static isCar(other: any): other is Car {
    if (
      other && // is it truthy
      typeof other === "object" && // and an object
      #serialNumber in other
    ) {
      // and we can find a private field that we can access from here
      // then it *must* be a car
      other;

      return true;
    }
    return false;
  }
}

// 结合 `switch` 使用
class Fish {
  swim(): void {}
}
class Bird {
  fly(): void {}
}

let val2 = {} as any;
switch (true) {
  case val2 instanceof Bird:
    val2.fly();

    break;
  case val2 instanceof Fish:
    val2.swim();

    break;
}

// `satisfies` 关键字
type DateLike = Date | number | string;

type Holidays = {
  [k: string]: DateLike;
};

const usHolidays = {
  independenceDay: "July 4, 2024",
  memorialDay: new Date("May 27, 2024"),
  laborDay: 1725260400000, // September 2, 2024
} satisfies Holidays;

usHolidays;
