import ShareStrategy from "./ShareStrategy";

export default class Social implements ShareStrategy {
  share(): void {
    console.log("I'm posting the photo on social media.");
  }
}
