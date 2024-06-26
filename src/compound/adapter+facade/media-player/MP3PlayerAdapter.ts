import MP3Player from "./MP3Player";
import MediaPlayer from "./MediaPlayer";

export default class MP3PlayerAdapter implements MediaPlayer {
  private mp3Player: MP3Player;

  constructor(mp3Player: MP3Player) {
    this.mp3Player = mp3Player;
  }

  play(): void {
    this.mp3Player.startPlayback();
  }

  pause(): void {
    this.mp3Player.pauseMp3();
  }

  stop(): void {
    this.mp3Player.stopMP3();
  }
}