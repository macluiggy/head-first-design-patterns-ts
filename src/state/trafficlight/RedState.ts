import TrafficLightState from "./TrafficLightState";
import TrafficLight from "./TrafficLight";

export default class RedState implements TrafficLightState {
  TrafficLight: TrafficLight
  constructor(trafficLight: TrafficLight) {
    this.TrafficLight = trafficLight;
  }

  changeToNextState(): void {
    console.log('Changing state to green');
    this.TrafficLight.changeState(this.TrafficLight.getFlashingRedState());
  }

  handleTraffic(): void {
    console.log('Red light: Stop!');
  }
}