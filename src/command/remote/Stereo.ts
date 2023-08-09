export default class Stereo {
    on() {
        console.log("Stereo is on");
    }
    off() {
        console.log("Stereo is off");
    }
    setCD() {
        console.log("Stereo is set for CD input");
    }
    setDVD() {
        console.log("Stereo is set for DVD input");
    }
    setRadio() {
        console.log("Stereo is set for Radio");
    }
    setVolume(volume) {
        console.log(`Stereo volume set to ${volume}`);
    }
}