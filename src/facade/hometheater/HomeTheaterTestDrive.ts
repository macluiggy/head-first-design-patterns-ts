import Amplifier from "./Amplifier";
import CdPlayer from "./CdPlayer";
import HomeTheaterFacade from "./HomeTheaterFacade";
import PopcornPopper from "./PopcornPopper";
import Projector from "./Projector";
import Screen from "./Screen";
import StreamingPlayer from "./StreamingPlayer";
import TheaterLights from "./TheaterLights";
import Tuner from "./Tuner";

export default class HomeTheaterTestDrive {
  static main(): void {
    const amp = new Amplifier("Top-O-Line Amplifier");
    const tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
    const cd = new CdPlayer("Top-O-Line CD Player", amp);
    const projector = new Projector("Top-O-Line Projector", cd);
    const lights = new TheaterLights("Theater Ceiling Lights");
    const screen = new Screen("Theater Screen");
    const popper = new PopcornPopper("Popcorn Popper");
    const player = new StreamingPlayer("Movie Streaming Player");

    const homeTheater = new HomeTheaterFacade({
      amp,
      tuner,
      player,
      cd,
      projector,
      lights,
      screen,
      popper,
    });

    homeTheater.watchMovie("Raiders of the Lost Ark");
    homeTheater.endMovie();
  }
}

HomeTheaterTestDrive.main();
