// 字段和方法
class Car2 {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let sedan = new Car2("Honda", "Accord", 2017);
sedan.activateTurnSignal("left"); // 报错
new Car2(2017, "Honda", "Accord"); // 报错

// 静态字段、静态方法、静态块
class Car3 {
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
  serialNumber = Car3.generateSerialNumber();
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
  }
}
console.log(new Car3("Honda", "Accord", 2017));
// > "Honda Accord 2017 - #100
console.log(new Car3("Toyota", "Camry", 2022));
// > "Toyota Camry 2022 - #101

// 访问修饰符关键字
class Car4 {
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
  private _serialNumber = Car4.generateSerialNumber();
  protected get serialNumber() {
    return this._serialNumber;
  }
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car4 {
  getSedanInformation() {
    this._serialNumber; // 报错
    Car4.generateSerialNumber(); // 报错
    const { make, model, year, serialNumber } = this;
    return { make, model, year, serialNumber };
  }
}

const s = new Sedan("Nissan", "Altima", 2020);
s.serialNumber; // 报错

// TypeScript 3.8 开始支持私有类字段
// TypeScript 5 开始支持静态私有 `#fields`

// readonly
class Car5 {
  static #nextSerialNumber: number;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  public make: string;
  public model: string;
  public year: number;
  readonly #serialNumber = Car5.#generateSerialNumber();

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
class Car6 {
  constructor(public make: string, public model: string, public year: number) {}
}

const myCar2 = new Car6("Honda", "Accord", 2017);
myCar2.make;

// 重写
class Car7 {
  honk() {
    console.log("beep");
  }
}

class Truck2 extends Car7 {
  override hoonk() {
    // 报错
    console.log("BEEP");
  }
}

const t = new Truck2();
t.honk(); // "beep"
