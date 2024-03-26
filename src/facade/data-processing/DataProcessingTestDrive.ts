import DataProcessingFacade from "./DataProcessingFacade";

export default class DataProcessingTestDrive {
  public static main(): void {
    const dataProcessingFacade = new DataProcessingFacade();
    dataProcessingFacade.processData("data");
  }
}

DataProcessingTestDrive.main();