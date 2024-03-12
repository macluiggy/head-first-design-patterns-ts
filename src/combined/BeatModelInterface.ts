import BPMObserver from "./BPMObserver";
import BeatObserver from "./BeatObserver";

export default interface BeatModelInterface {
  initialize(): void;
  on(): void;
  off(): void;
  setBPM(bpm: number): void;
  getBPM(): number;
  registerObserver(o: BeatObserver): void;
  removeObserver(o: BeatObserver): void;
  registerObserver(o: BPMObserver): void;
  removeObserver(o: BPMObserver): void;
}
