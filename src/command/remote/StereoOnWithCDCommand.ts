import Stereo from "./Stereo";

export default class StereoOnWithCDCommand {
  private stereo: Stereo;
  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo() {
    this.stereo.off();
  }
}
