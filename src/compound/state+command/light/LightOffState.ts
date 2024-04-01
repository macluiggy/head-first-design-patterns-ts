import LightState from "./LightState";

export default class LightOffState implements LightState{
  light: LightState;
  constructor(light: LightState) {
    this.light = light;
  }
  on(): void {
    console.log("The light is on.");
    // this.light.changeState(this.light.getOnState());
  }
  off(): void {
    console.log("The light is already off.");
  }
}