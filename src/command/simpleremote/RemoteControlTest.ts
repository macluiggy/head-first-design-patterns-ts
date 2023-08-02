import Light from './Light';
import LightOnCommand from './LightOnCommand';
import SimpleRemoteControl from './SimpleRemoteControl';

export default class RemoteControlTest {
  public static main(): void {
    const remote: SimpleRemoteControl = new SimpleRemoteControl();
    const light: Light = new Light();
    const lightOn: LightOnCommand = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
  }
}

RemoteControlTest.main();