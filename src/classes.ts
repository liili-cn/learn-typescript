// 字段和方法
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let sedan = new Car("Honda", "Accord", 2017);
sedan.activateTurnSignal("left"); // 报错
new Car(2017, "Honda", "Accord"); // 报错

// 静态字段、静态方法、静态块
class Car2 {
  // Static stuff
  static nextSerialNumber = 100;
  static generateSerialNumber() {
    return this.nextSerialNumber++;
  }
  static {
    // `this` is the static scope
    fetch("https://api.example.com/vin_number_data")
      .then((response) => response.json())
      .then((data) => {
        this.nextSerialNumber = data.mostRecentInvoiceId + 1;
      });
  }

  // Instance stuff
  make: string;
  model: string;
  year: number;
  serialNumber = Car2.generateSerialNumber();
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
  }
}
console.log(new Car2("Honda", "Accord", 2017));
// > "Honda Accord 2017 - #100
console.log(new Car2("Toyota", "Camry", 2022));
// > "Toyota Camry 2022 - #101

// 访问修饰符关键字
class Car3 {
  // Static stuff
  private static nextSerialNumber: number;
  private static generateSerialNumber() {
    return this.nextSerialNumber++;
  }
  static {
    // `this` is the static scope
    fetch("https://api.example.com/vin_number_data")
      .then((response) => response.json())
      .then((data) => {
        this.nextSerialNumber = data.mostRecentInvoiceId + 1;
      });
  }
  // Instance stuff
  make: string;
  model: string;
  year: number;
  private _serialNumber = Car3.generateSerialNumber();
  protected get serialNumber() {
    return this._serialNumber;
  }
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car3 {
  getSedanInformation() {
    this._serialNumber; // 报错
    Car3.generateSerialNumber(); // 报错
    const { make, model, year, serialNumber } = this;
    return { make, model, year, serialNumber };
  }
}

const s = new Sedan("Nissan", "Altima", 2020);
s.serialNumber; // 报错

// TypeScript 3.8 开始支持私有类字段
// TypeScript 5 开始支持静态私有 `#fields`

// readonly
class Car4 {
  static #nextSerialNumber: number;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  public make: string;
  public model: string;
  public year: number;
  readonly #serialNumber = Car4.#generateSerialNumber();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  changeSerialNumber(num: number) {
    this.#serialNumber = num; // 报错
  }
}

// 参数属性
// 为构造函数提供了更简洁的语法
class Car5 {
  constructor(public make: string, public model: string, public year: number) {}
}

const myCar = new Car5("Honda", "Accord", 2017);
myCar.make;

// 重写
class Car6 {
  honk() {
    console.log("beep");
  }
}

class Truck extends Car6 {
  override hoonk() {
    // 报错
    console.log("BEEP");
  }
}

const t = new Truck();
t.honk(); // "beep"

export { Car, sedan, Car2, Car3, Sedan, s, Car4, Car5, myCar, Car6, Truck, t };
