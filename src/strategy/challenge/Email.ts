import ShareStrategy from "./ShareStrategy";

export default class Email implements ShareStrategy {
  share(): void {
    console.log("I'm sending the photo via email.");
  }
}