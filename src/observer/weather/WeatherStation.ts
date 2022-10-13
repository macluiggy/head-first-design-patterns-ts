import CurrentConditionDisplay from "./CurrentConditionDisplay";
import WeatherData from "./WeatherData";
import StatisticsDisplay from "./StatisticsDisplay";
import ForecastDisplay from "./ForecastDisplay";
import HeatIndexDisplay from "./HeatIndexDisplay";

export default class WeatherStation {
  public static main(): void {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);
    // const statisticsDisplay = new StatisticsDisplay(weatherData);
    // const forecastDisplay = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);

    // weatherData.getObservers().forEach((o) => {
    //   console.log(o);
    // });

    weatherData.removeObserver(currentDisplay);
    weatherData.setMeasurements(120, 100, 29.2);
  }
}

WeatherStation.main();
