import ShareStrategy from "./ShareStrategy";

export default class Txt implements ShareStrategy {
  share(): void {
    console.log("I'm sending the photo via text message.");
  }
}