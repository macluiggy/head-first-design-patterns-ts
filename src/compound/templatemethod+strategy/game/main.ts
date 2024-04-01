import Chess from "./Chess";
import Checkers from "./Checkers";
import AggressiveStrategy from "./AggressiveStrategy";
import DefensiveStrategy from "./DefensiveStrategy";

const chess = new Chess(new AggressiveStrategy());
const checkers = new Checkers(new DefensiveStrategy());
chess.setStrategy(new DefensiveStrategy());
chess.playGame();
checkers.playGame();