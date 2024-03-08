import TrafficLight from "./TrafficLight";

export default class FlashingRedState {
  TrafficLight: TrafficLight
  constructor(trafficLight: TrafficLight) {
    this.TrafficLight = trafficLight;
  }

  changeToNextState(): void {
    console.log('Changing state to green');
    this.TrafficLight.changeState(this.TrafficLight.getGreenState());
  }

  handleTraffic(): void {
    console.log('Flashing red light: Stop!');
  }  
}