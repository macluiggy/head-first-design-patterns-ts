import SimpleOberver from "./SimpleOberver";
import SimpleSubject from "./SimpleSubject";

export default class Example {
  public static main(): void {
    const subject = new SimpleSubject();
    const observer = new SimpleOberver(subject);
    subject.setValue(10);
    subject.setValue(20);
    subject.setValue(30);

    // console.log(subject);
    
    subject.removeObserver(observer);
  }
}

Example.main();