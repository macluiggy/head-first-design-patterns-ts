export default class Stereo {
  constructor(private location: string) {
    this.location = location;
  }

  on() {
    console.log(`Stereo is on in ${this.location}`);
  }
  off() {
    console.log(`Stereo is off in ${this.location}`);
  }
  setCD() {
    console.log(`Stereo is set for CD input in ${this.location}`);
  }
  setDVD() {
    console.log(`Stereo is set for DVD input in ${this.location}`);
  }
  setRadio() {
    console.log(`Stereo is set for Radio input in ${this.location}`);
  }
  setVolume(volume: number) {
    // code to set the volume
    // valid range: 1-11 (after all 11 is better than 10, right?)
    // ok, we'll allow 0 just to make the math easy
    // but -1?  why would you want negative volume?
    // we'll throw an exception if you try to give us b.s.
    // xd - I'm not going to implement this
    // ok maybe I will
    // this comment is getting too long
    // I'm not sure why I'm still typing
    // but I'm almost done
    // really
    // any second now
    // you can stop reading this
    // waiting
    // waiting
    // done.
    // all this comments were made by github copilot i swear, except this one, this one was made by me
    console.log(`Stereo volume set to ${volume} in ${this.location}`);
  }
}
