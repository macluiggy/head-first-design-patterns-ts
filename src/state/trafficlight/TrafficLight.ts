import GreenState from "./GreenState";
import RedState from "./RedState";
import YellowState from "./YellowState";
import FlashingRedState from "./FlashingRedState";
import TrafficLightState from "./TrafficLightState";

export default class TrafficLight {
  currentState: TrafficLightState;
  redState: TrafficLightState;
  greenState: TrafficLightState;
  yellowState: TrafficLightState;
  flashingRedState: TrafficLightState;

  constructor() {
    this.redState = new RedState(this);
    this.greenState = new GreenState(this);
    this.yellowState = new YellowState(this);
    this.flashingRedState = new FlashingRedState(this);
    this.currentState = this.redState;
  }

  changeState(newState: TrafficLightState): void {
    this.currentState = newState;
  }

  handleTraffic(): void {
    this.currentState.handleTraffic();
  }

  changeToNextState(): void {
    this.currentState.changeToNextState();
  }

  getRedState(): TrafficLightState {
    return this.redState;
  }
  getGreenState(): TrafficLightState {
    return this.greenState;
  }
  getYellowState(): TrafficLightState {
    return this.yellowState;
  }
  getFlashingRedState(): TrafficLightState {
    return this.flashingRedState;
  }
}
