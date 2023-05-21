function logMethod(value: any, context: ClassSetterDecoratorContext) {
  return function (this: any, ...args: any[]): void {
    if (args[0] > 120) {
      value.apply(this, [120]);
    } else {
      value.apply(this, args);
    }
  };
}

class User {
  private age: number = 0;

  @logMethod
  set sValue(age: number) {
    this.age = age;
  }
  get gValue() {
    return this.age;
  }
}

const user = new User();
user.sValue = 120;

console.log(user.gValue);
