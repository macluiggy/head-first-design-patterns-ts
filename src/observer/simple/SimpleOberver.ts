import Observer from "./Oberver";
import SimpleSubject from "./SimpleSubject";
import Subject from "./Subject";

export default class SimpleOberver implements Observer {
  private value: number = 0;
  private subject: SimpleSubject;

  constructor(subject: SimpleSubject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(value: number): void {
    this.value = value;
    this.display();
  }
  
  display(): void {
    console.log("Value: ", this.value);
  }
}