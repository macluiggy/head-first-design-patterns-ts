export default interface BeatObserver {
  updateBeat(): void;
  observerType?: 'beat'
}