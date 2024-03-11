import Serializable from "./Serializable";

export default interface State extends Serializable {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
  refill(): void;
}
