function print<T>(arg: T): T {
  console.log(arg);
  return arg;
}

print<string>("abc");
print<number>(123);
let obj = {
  name: "123",
};
print<object>(obj);

let a: boolean = false;
