import Storage from "./Storage";
import Transformation from "./Transformation";
import DataIngestion from "./DataIngestion";

export default class DataProcessingFacade {
  private storage: Storage;
  private transformation: Transformation;
  private dataIngestion: DataIngestion

  constructor() {
    this.storage = new Storage();
    this.transformation = new Transformation();
    this.dataIngestion = new DataIngestion();
  }

  public processData(data: string): void {
    const tranformedData = this.transformation.transformData(data);
    this.storage.storeData(tranformedData);
    this.dataIngestion.ingestData(tranformedData);
  }
}