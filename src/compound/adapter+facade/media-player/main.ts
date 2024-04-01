import MediaPlayerFacade from "./MediaPlayerFacade";
import MP3PlayerAdapter from "./MP3PlayerAdapter";
import MP3Player from "./MP3Player";

const mp3Player = new MP3Player();
const mp3PlayerAdapter = new MP3PlayerAdapter(mp3Player);
const mediaPlayerFacade = new MediaPlayerFacade(mp3PlayerAdapter);

mediaPlayerFacade.automaticPlayStopAndPause();