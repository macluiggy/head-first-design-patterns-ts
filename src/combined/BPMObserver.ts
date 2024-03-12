export default interface BPMObserver {
  updateBPM(): void;
  observerType?: 'bpm'
}
