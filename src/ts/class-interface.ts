interface IWake {
  wakeUp(): void;
}

interface IMusic {
  listen(): void;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
import { Animal } from "./class";

class WakeUp extends Animal implements IWake, IMusic {
  say(): void {
    console.log("hello fisk");
  }
  listen(): void {
    console.log("listen to music");
  }
  wakeUp(): void {
    console.log("wakeUp");
  }
}

let wakeUp = new WakeUp("baoie");
wakeUp.listen();

console.log(wakeUp);
