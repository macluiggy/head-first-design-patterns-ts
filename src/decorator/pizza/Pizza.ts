export default interface Pizza {
  prepare?(): void;
  bake?(): void;
  cut?(): void;
  box?(): void;
  getDescription(): string;
  cost(): number;
}