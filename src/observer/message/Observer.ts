export default interface Observer {
  update(msg: string, sender: string): void;
}