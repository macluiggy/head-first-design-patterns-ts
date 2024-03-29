import BPMObserver from "./BPMObserver";
import BeatModelInterface from "./BeatModelInterface";
import BeatObserver from "./BeatObserver";
import HeartModelInterface from "./HeartModelInterface";

export default class HeartAdapter implements BeatModelInterface {
  heart: HeartModelInterface;
  constructor(heart: HeartModelInterface) {
    this.heart = heart;
  }
  on(): void {
    throw new Error("Method not implemented.");
  }
  setBPM(bpm: number): void {
    throw new Error("Method not implemented.");
  }
  registerObserver(o: BeatObserver): void;
  registerObserver(o: BPMObserver): void;
  registerObserver(o: unknown): void {
    this.heart.registerObserver(o);
  }
  removeObserver(o: BeatObserver): void;
  removeObserver(o: BPMObserver): void;
  removeObserver(o: unknown): void {
    this.heart.removeObserver(o);
  }

  initialize(): void {
    this.heart.initialize();
  }

  getBPM(): number {
    return this.heart.getHeartRate();
  }

  off(): void {}
}
