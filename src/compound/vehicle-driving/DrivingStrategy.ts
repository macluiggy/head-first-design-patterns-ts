// export default abstract class DrivingStrategy {
//   abstract drive(): void;
//   abstract stop(): void;
//   abstract honk(): void;

import Vehicle from "./Vehicle";

// }
export default interface DrivingStrategy {
  type: string;
  drive(): void;
}