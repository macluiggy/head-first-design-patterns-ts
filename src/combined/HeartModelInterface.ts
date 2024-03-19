export default interface HeartModelInterface {
  initialize(): void;
  on(): void;
  off(): void;
  setBPM(bpm: number): void;
  getBPM(): number;
  registerObserver(o: unknown): void;
  removeObserver(o: unknown): void;
}