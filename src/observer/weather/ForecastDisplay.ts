import DisplayElement from "./DisplayElement";
import Observer from "./Observer";
import WeatherData from "./WeatherData";

export default class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;
  private lastPressure: number;
  private weatherqData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherqData = weatherData;
    weatherData.registerObserver(this);
    this.currentPressure = 29.92;
    this.lastPressure = 29.92
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  display(): void {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure === this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
} 