import MediaPlayer from "./MediaPlayer";

export default class MediaPlayerFacade {
  constructor(private mediaPlayer: MediaPlayer) {

  }

  automaticPlayStopAndPause(): void {
    this.mediaPlayer.play();
    this.mediaPlayer.pause();
    this.mediaPlayer.stop();
  }
}