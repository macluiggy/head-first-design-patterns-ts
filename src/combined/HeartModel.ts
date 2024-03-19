import BeatObserver from "./BeatObserver";
import HeartModelInterface from "./HeartModelInterface";

export default class HeartModel implements HeartModelInterface {
  heartRate: number = 80;
  observers: BeatObserver[] = [];
  interval: NodeJS.Timeout;

  constructor() {
    this.interval = setInterval(() => this.beat(), 1000);
  }
  initialize(): void {
    try {
      console.log("HeartModel.initialize()");
    } catch (ex) {
      console.error(ex);
    }
  }
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
  setBPM(bpm: number): void {
    throw new Error("Method not implemented.");
  }
  getBPM(): number {
    throw new Error("Method not implemented.");
  }

  beat() {
    this.heartRate += Math.floor(Math.random() * 2) - 1;
    this.notifyObservers();
  }

  registerObserver(o: BeatObserver) {
    this.observers.push(o);
  }

  removeObserver(o: BeatObserver) {
    let i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers() {
    // console.log(this.observers);
    
    for (let i = 0; i < this.observers.length; i++) {
      let observer = this.observers[i];
      observer.updateBeat();
    }
  }

  getHeartRate() {
    return this.heartRate;
  }
}
