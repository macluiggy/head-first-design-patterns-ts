import MediaPlayer from "./MediaPlayer";

export default class CommonMediaPlayer implements MediaPlayer {
  play(): void {
    console.log("Playing media");
  }

  pause(): void {
    console.log("Pausing media");
  }

  stop(): void {
    console.log("Stopping media");
  }
}