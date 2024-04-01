import Light from "./Light";
import LightState from "./LightState";

export default class LightOnState implements LightState {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  on(): void {
    console.log("The light is already on.");
  }
  off(): void {
    console.log("The light is off.");
    this.light.changeState(this.light.getOffState());
  }
}
