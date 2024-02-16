import Amplifier from "./Amplifier";

export default class StreamingPlayer {
  description: string;
  currentChapter: number;
  amplifier: Amplifier;
  movie: string;

  constructor(description: string) {
    this.description = description;
  }

  on(): void {
    console.log(this.description + " on");
  }

  off(): void {
    console.log(this.description + " off");
  }

  playMovie(movie: string): void {
    this.movie = movie;
    this.currentChapter = 0;
    console.log(this.description + ' playing "' + movie + '"');
  }

  playChapter(chapter: number): void {
    if (this.movie == null) {
      console.log(
        this.description +
          " can’t play chapter " +
          chapter +
          " no movie selected"
      );
    } else {
      this.currentChapter = chapter;
      console.log(
        this.description +
          " playing chapter " +
          this.currentChapter +
          ' of "' +
          this.movie +
          '"'
      );
    }
  }

  stop(): void {
    this.currentChapter = 0;
    console.log(this.description + ' stopped "' + this.movie + '"');
  }

  pause(): void {
    console.log(this.description + ' paused "' + this.movie + '"');
  }

  toString(): string {
    return this.description;
  }
}
