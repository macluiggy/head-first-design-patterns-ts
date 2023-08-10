export default class GarageDoor {
  constructor(private location: string) {
    this.location = location;
  }

  up() {
    console.log(`Garage door is up in ${this.location}`);
  }
  down() {
    console.log(`Garage door is down in ${this.location}`);
  }
  stop() {
    console.log(`Garage door is stopped in ${this.location}`);
  }
  lightOn() {
    console.log(`Garage door light is on in ${this.location}`);
  }
  lightOff() {
    console.log(`Garage door light is off in ${this.location}`);
  }
}