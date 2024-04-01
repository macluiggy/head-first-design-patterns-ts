import Light from "./Light";
import LightState from "./LightState";

export default class LightOffState implements LightState{
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  on(): void {
    console.log("The light is on.");
    this.light.changeState(this.light.getOnState());
  }
  off(): void {
    console.log("The light is already off.");
  }
}