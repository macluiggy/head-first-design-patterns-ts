import MediaPlayer from "./MediaPlayer";
import WAVPlayer from "./WAVPlayer";

export default class WAVPlayerAdapter implements MediaPlayer {
  private wavPlayer: any;

  constructor() {
    this.wavPlayer = new WAVPlayer();
  }

  play(): void {
    this.wavPlayer.startPlayback();
  }

  pause(): void {
    this.wavPlayer.pauseWAV();
  }

  stop(): void {
    this.wavPlayer.stopWAV();
  }
}
