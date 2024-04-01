import LightOffState from "./LightOffState";
import LightOnState from "./LightOnState";
import LightState from "./LightState";


export default class Light implements LightState {
  lightOnState: LightState;
  lightOffState: LightState;
  lightState: LightState;
  command: LightState;

  constructor() {
    this.lightOnState = new LightOnState(this);
    this.lightOffState = new LightOffState(this);
    this.lightState = this.lightOffState;
  }

  on(): void {
    this.lightState.on();
  }

  off(): void {
    this.lightState.off();
  }

  changeState(state: LightState): void {
    this.lightState = state;
  }

  setCommand(command: LightState): void {
    this.command = command;
  }

  getOnState(): LightState {
    return this.lightOnState;
  }

  getOffState(): LightState {
    return this.lightOffState;
  }
}