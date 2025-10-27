// 类型查询
// keyof 获取指定接口上所有属性键的类型
type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

// typeof 从值中提取类型
async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
  ]);

  type ApiResponseType = typeof apiResponse;
}

// 通过索引访问类型
interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car["color"];
let carColor2: Car["not-something-on-car"]; // 报错
let carColorRedComponent: Car["color"]["red"];
let carProperty: Car["color" | "year"];

export { main, carColor, carColor2, carColorRedComponent, carProperty };
export {
  type DatePropertyNames,
  type DateStringPropertyNames,
  type DateSymbolPropertyNames,
  type Car,
};
