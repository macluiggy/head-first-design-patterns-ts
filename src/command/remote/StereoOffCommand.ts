import Stereo from "./Stereo";

export default class StereoOffCommand {
  private stereo: Stereo;
  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute() {
    this.stereo.off();
  }

  undo() {
    this.stereo.on();
  }
}
