import Remote from "./Remote";
import State from "./State";

export default interface GumballMachineRemote extends Remote {
  getCount(): number;
  getLocation(): string;
  getState(): State;
}