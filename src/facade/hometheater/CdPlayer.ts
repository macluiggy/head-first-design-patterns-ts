import Amplifier from "./Amplifier";

export default class CdPlayer {
  description: string;
  currentTrack: number;
  amplifier: Amplifier;
  title: string;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  on(): void {
    console.log(this.description + " on");
  }

  off(): void {
    console.log(this.description + " off");
  }

  eject(): void {
    this.title = "";
    console.log(this.description + " eject");
  }

  playTitle(title: string): void {
    this.title = title;
    this.currentTrack = 0;
    console.log(this.description + ' playing "' + title + '"');
  }

  playTrack(track: number): void {
    if (this.title === null) {
      console.log(
        this.description +
          " can't play track " +
          this.currentTrack +
          ", no cd inserted"
      );
    } else {
      this.currentTrack = track;
      console.log(this.description + " playing track " + this.currentTrack);
    }
  }

  stop(): void {
    this.currentTrack = 0;
    console.log(this.description + " stopped");
  }

  pause(): void {
    console.log(this.description + ' paused "' + this.title + '"');
  }

  toString(): string {
    return this.description;
  }
}
