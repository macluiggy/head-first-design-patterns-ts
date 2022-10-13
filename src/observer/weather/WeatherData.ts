import Observer from "./Observer";
import Subject from "./Subject";

export default class WeatherData implements Subject {
  private obervers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.obervers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o: Observer): void {
    this.obervers.push(o);
    // console.log(this.obervers);
  }

  removeObserver(o: Observer): void {
    const i = this.obervers.indexOf(o);
    if (i >= 0) {
      this.obervers.splice(i, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.obervers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  getObservers(): Observer[] {
    return this.obervers;
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}
