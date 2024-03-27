// export default abstract class DrivingStrategy {
//   abstract drive(): void;
//   abstract stop(): void;
//   abstract honk(): void;
// }
export default interface DrivingStrategy {
  drive(): void;
}