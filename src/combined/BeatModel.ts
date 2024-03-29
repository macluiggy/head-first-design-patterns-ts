import BeatModelInterface from "./BeatModelInterface";
import BPMObserver from "./BPMObserver";
import BeatObserver from "./BeatObserver";

class Audio {
  constructor(src: string) {
    this.src = src;
  }
  src: string;
  play() {
    console.log("Playing audio: " + this.src);
  }
}

export default class BeatModel implements BeatModelInterface {
  beatObservers: BeatObserver[] = [];
  bpmObservers: BPMObserver[] = [];
  bpm: number = 90;
  thread: NodeJS.Timeout;
  stop: boolean = false;
  clip: any;

  initialize(): void {
    try {
      console.log('BeatModel.initialize()');
      
      this.clip = new Audio("clap.wav");
    } catch (ex) {
      console.error(ex);
    }
  }

  on(): void {
    console.log('BeatModel.on()');
    
    this.bpm = 90;
    this.notifyBPMObservers();
    this.stop = false;
    this.thread = setInterval(() => this.run(), (60 / this.bpm) * 1000);
  }

  off(): void {
    this.stopBeat();
    this.stop = true;
  }

  run(): void {
    if (!this.stop) {
      this.beatEvent();
      this.notifyBeatObservers();
    }
  }

  setBPM(bpm: number): void {
    this.bpm = bpm;
    this.notifyBPMObservers();
  }

  getBPM(): number {
    return this.bpm;
  }

  setBeat(beat: number): void {
    console.log("setBeat not implemented yet");
  }

  getBeat(): number {
    return 0;
  }

  notifyBPMObservers(): void {
    this.bpmObservers.forEach((observer) => observer.updateBPM());
  }

  notifyBeatObservers(): void {
    this.beatObservers.forEach((observer) => observer.updateBeat());
  }

  registerObserver(o: BeatObserver): void;
  registerObserver(o: BPMObserver): void;
  registerObserver(o: BeatObserver | BPMObserver): void {
    if (o.observerType === "beat") {
      this.beatObservers.push(o);
    } else if (o.observerType === "bpm") {
      this.bpmObservers.push(o);
    }
  }

  removeObserver(o: BeatObserver): void;
  removeObserver(o: BPMObserver): void;
  removeObserver(o: BeatObserver | BPMObserver): void {
    if (o.observerType === "beat") {
      const index = this.beatObservers.indexOf(o);
      if (index >= 0) {
        this.beatObservers.splice(index, 1);
      }
    } else if (o.observerType === "bpm") {
      const index = this.bpmObservers.indexOf(o);
      if (index >= 0) {
        this.bpmObservers.splice(index, 1);
      }
    }
  }

  beatEvent(): void {
    this.clip.play();
  }

  stopBeat(): void {
    clearInterval(this.thread);
  }
}
