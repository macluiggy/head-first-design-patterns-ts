export default class Light {
  constructor(private location: string) {
    this.location = location;
  }

  on() {
    console.log(`Light is on in ${this.location}`);
  }
  off() {
    console.log(`Light is off in ${this.location}`);
  }
}
