class Test {
  bool: boolean;
  constructor() {
    this.bool = true;
  }
  getBool() {
    return this.bool;
  }
  setBool(bool: boolean) {
    this.bool = bool;
  }
}

let bool1 = new Test();
bool1.setBool(false);
console.log(bool1.getBool());

let bool2 = new Test();
console.log(bool2.getBool());
