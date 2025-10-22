// 可调用类型
interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add2: TwoNumberCalculation = (a, b) => a + b;

const subtract: TwoNumberCalc = (x, y) => x - y;

// void 是一种特殊类型，专门用于描述函数返回值，表示返回值将被忽略
function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, "  "));
}

const xx = printFormattedJSON(["hello", "world"]);

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds2(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
invokeInFourSeconds(() => values.push(4)); // 报错
invokeInFiveSeconds2(() => values.push(4));

// 构造签名：描述使用 `new` 关键字进行实例化时，对应的类型所应满足的结构要求
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor(1697923072611);

// 函数重载
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);
// 实现函数的签名必须足够通用
// function handleMainEvent(elem: HTMLFormElement) {}
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0];
const myForm = document.getElementsByTagName("form")[0];
handleMainEvent;

// this 类型
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

myClickHandler;

const myButton = document.getElementsByTagName("button")[0];
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event("click")); // bound version: ok
myClickHandler.call(myButton, new Event("click")); // alse ok

// 函数类型最佳实践 - 显示定义返回类型
async function getData(url: string): Promise<{ properties: string[] }> {
  // ？？？这里并未报错
  const resp = await fetch(url);
  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };
    return data;
  }
}

function loadData() {
  getData("https://example.com").then((result) => {
    console.log(result.properties.join(", "));
  });
}
