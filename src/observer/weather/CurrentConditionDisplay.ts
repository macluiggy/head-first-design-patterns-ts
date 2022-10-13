import DisplayElement from "./DisplayElement";
import Observer from "./Observer";
import Subject from "./Subject";
import WeatherData from "./WeatherData";

export default class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
    this.temperature = 0;
    this.humidity = 0;
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }

}
