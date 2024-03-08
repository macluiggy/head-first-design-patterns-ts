import TrafficLight from "./TrafficLight";
export default class TrafficLightTestDrive {
  static main(): void {
    const trafficLight = new TrafficLight();
    trafficLight.handleTraffic();
    trafficLight.changeToNextState();
    trafficLight.handleTraffic();
    trafficLight.changeToNextState();
    trafficLight.handleTraffic();
    trafficLight.changeToNextState();
    trafficLight.handleTraffic();
    trafficLight.changeToNextState();
    trafficLight.handleTraffic();
    trafficLight.changeToNextState();
    trafficLight.handleTraffic();

    // Output:
    // Red light: Stop!
    // Changing state to green
    // Green light: Go!
    
    // Changing state to yellow
    // Yellow light: Prepare to stop!
    
    // Changing state to red
    // Red light: Stop!

    // Changing state to green
    // Green light: Go!

    // Changing state to yellow
    // Yellow light: Prepare to stop!

    // Changing state to red
    // Red light: Stop!

    // Changing state to green
    // Green light: Go!

    // Changing state to yellow
    // Yellow light: Prepare to stop!

    // Changing state to red
    // Red light: Stop!
  }
}

TrafficLightTestDrive.main();