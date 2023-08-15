export default class Hottub {
  private _on: boolean = false;
  private temperature: number = 0;

  public on(): void {
    this._on = true;
  }

  public off(): void {
    this._on = false;
  }

  public circulate(): void {
    if (this._on) {
      console.log("Hottub is bubbling!");
    }
  }

  public jetsOn(): void {
    if (this._on) {
      console.log("Hottub jets are on");
    }
  }

  public jetsOff(): void {
    if (this._on) {
      console.log("Hottub jets are off");
    }
  }

  public setTemperature(temperature: number): void {
    if (temperature > this.temperature) {
      console.log(`Hottub is heating to a steaming ${temperature} degrees`);
    } else {
      console.log(`Hottub is cooling to ${temperature} degrees`);
    }
    this.temperature = temperature;
  }

  public heat(): void {
    this.temperature = 105;
    console.log("Hottub is heating to a steaming 105 degrees");
  }

  public cool(): void {
    this.temperature = 98;
    console.log("Hottub is cooling to 98 degrees");
  }

  public bubblesOn(): void {
    if (this._on) {
      console.log("Hottub is bubbling!");
    }
  }

  public bubblesOff(): void {
    if (this._on) {
      console.log("Hottub is not bubbling");
    }
  }
}
