import TrafficLight from "./TrafficLight";

export default class YellowState {
  TrafficLight: TrafficLight;
  constructor(trafficLight: TrafficLight) {
    this.TrafficLight = trafficLight;
  }

  changeToNextState(): void {
    console.log("Changing state to red");
    this.TrafficLight.changeState(this.TrafficLight.getRedState());
  }

  handleTraffic(): void {
    console.log("Yellow light: Prepare to stop!");
  }
}