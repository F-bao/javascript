const a: number = 100;

let fun = (): [] => {
  return [];
};
function func(): [] {
  return [];
}

let fun2 = (a: number, b: number): number => a + b;

export function reverseNumber(num: number): number {
  let res = Number(num.toString().split("").reverse().join(""));
  return res;
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export interface IPerson {
  readonly name: string;
  age: number;
  career?: string;
  isNickLooking: boolean;
}

export interface IFun {
  (x: number, y: number): number;
}
