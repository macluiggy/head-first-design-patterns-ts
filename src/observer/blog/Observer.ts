export default interface Observer {
  update(...args: any[]): void;
}