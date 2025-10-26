// 泛型
// 定义 “输入类型” 和 “返回类型” 之间的关联
function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};

  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });

  return dict;
}

const dict1 = listToDict(
  [{ name: "Mike" }, { name: "Mark" }],
  (item) => item.name
);
console.log(dict1);
dict1.Mike;

const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
];

const dict2 = listToDict(phoneList, (p) => p.customerId);
dict2.fax;
console.log(dict2);

// 泛型最佳实践 - 每个类型参数至少使用两次
function returnAs<T>(arg: any): T {
  return arg; // 🚨 an `any` that will _seem_ like a `T`
}

// 🚨 DANGER! 🚨
const first2 = returnAs<number>(window);
const sameAs = window as any as number;
