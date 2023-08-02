export default class GarageDoor {
  public up(): void {
    console.log('Garage door is open');
  }

  public down(): void {
    console.log('Garage door is closed');
  }

  public stop(): void {
    console.log('Garage door is stopped');
  }

  public lightOn(): void {
    console.log('Garage light is on');
  }

  public lightOff(): void {
    console.log('Garage light is off');
  } 
}