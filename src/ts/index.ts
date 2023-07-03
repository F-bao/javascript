import { IFun, IPerson, reverseNumber, reverseString } from "./test";

console.log(reverseNumber(123));

console.log(reverseString("abc"));

let person: IPerson = {
  name: "baojie",
  age: 25,
  career: "coder",
  isNickLooking: false,
};

person.isNickLooking = true;

const fun: IFun = (x: number, y: number) => {
  return x + y;
};
