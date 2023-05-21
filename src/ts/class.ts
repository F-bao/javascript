export class A {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say(str: string) {
    console.log("hello world");
  }
}

class B extends A {
  work: string;
  constructor(name: string, age: number, work: string) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.work = work;
  }
  say(str: string) {
    console.log(`hello ${this.name}`);
  }
}

let a: A = new A("baojie", 25);

const b: A = new B("fisk", 25, "coder");
b.age = 18;

export abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract say(): void;
}

class animal extends Animal {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  say(): void {
    console.log("hello animal");
  }
}

let cat = new animal("cat");
