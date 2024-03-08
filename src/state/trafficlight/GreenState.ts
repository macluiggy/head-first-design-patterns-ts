import TrafficLight from "./TrafficLight";
import TrafficLightState from "./TrafficLightState";

export default class GreenState implements TrafficLightState {
  TrafficLight: TrafficLight
  constructor(trafficLight: TrafficLight) {
    this.TrafficLight = trafficLight;
  }

  changeToNextState(): void {
    console.log('Changing state to yellow');
    this.TrafficLight.changeState(this.TrafficLight.getYellowState());
  }

  handleTraffic(): void {
    console.log('Green light: Go!');
  }
}