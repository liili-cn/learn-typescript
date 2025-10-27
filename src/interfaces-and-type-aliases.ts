// 类型别名
type Amount = {
  currency: string;
  value: number;
};

function printAmount(amt: Amount) {
  console.log(amt);
  const { currency, value } = amt;
  console.log(`${currency} ${value}`);
}

// 可以在同一作用域中，只能声明一次
// type Amount = { // 报错
//   fail: "this will not work";
// };

// 类型别名中的继承（使用交叉类型）
type SpecialDate = Date & { getDescription(): string };

const newYearsEve: SpecialDate = Object.assign(new Date(), {
  getDescription: () => "Last day of year",
});

// 接口
// 接口是一种定义对象类型的方法
interface Amount2 {
  currency: string;
  value: number;
}

function printAmount2(amt: Amount2) {
  console.log(`${amt.currency} ${amt.value}`);
}

// 接口中的继承（extends）
// 子类继承父类
function consumeFood(arg) {}
class AnimalThatEats {
  eat(food) {
    consumeFood(food);
  }
}
class Cat extends AnimalThatEats {
  meow() {
    return "meow";
  }
}
const c = new Cat();
c.eat;
// ^?
c.meow();
//  ^?

// 子接口继承父接口
interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

interface Hamster extends Mammal {
  squeak(): string;
}

function careForHamster(h: Hamster) {
  h.getFurOrHairColor();
  h.squeak();
}

// 接口中的继承（implements）
interface AnimalLike {
  eat(food): void;
}

class Dog implements AnimalLike {
  bark() {
    return "woof";
  }
  // 添加 eat 方法，否则 Dog 类不符合 AnimalLike 接口
  eat(food) {
    consumeFood(food);
  }
  // 添加 isAlive 方法，否则 Dog 类不符合 AnimalLike 接口
  isAlive() {
    return true;
  }
}

// 开放接口
// 可以在同一作用域中有多个声明
interface AnimalLike {
  eat(food): void;
}

function feed(animal: AnimalLike) {
  animal.eat;
  animal.isAlive;
}

interface AnimalLike {
  isAlive(): boolean;
}

// 递归
// 递归类型是自引用的，通常用于描述可无限嵌套的类型
type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

if (typeof val !== "number") {
  val.push(41);

  val.push("this will not work"); // 报错
}

export {
  printAmount,
  newYearsEve,
  printAmount2,
  consumeFood,
  AnimalThatEats,
  Cat,
  careForHamster,
  Dog,
  feed,
  val,
};
export {
  type Amount,
  type SpecialDate,
  type Amount2,
  type Animal,
  type Mammal,
  type Hamster,
  type NestedNumbers,
};
