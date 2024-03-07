export default interface TrafficLightState {
  changeToNextState(): void;
  handleTraffic(): void;
}