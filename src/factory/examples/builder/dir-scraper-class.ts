import fs from "fs";

interface IFileReader {
  isJsonFile: (path: string) => boolean;
  readText(file: string): string;
  readJson(file: string): unknown;
}

class DirectoryScraper {
  constructor(public dirPath: string, public fileReader: IFileReader) {
    this.dirPath = dirPath;
    this.fileReader = fileReader;
  }

  scanFiles() {
    return fs
      .readdirSync(this.dirPath)
      .reduce<Record<string, unknown>>((acc, file) => {
        if (this.fileReader.isJsonFile(file)) {
          acc[file] = this.fileReader.readJson(`${this.dirPath}/${file}`);
        } else {
          acc[file] = this.fileReader.readText(`${this.dirPath}/${file}`);
        }
        return acc;
      }, {});
  }
}

class FileReader implements IFileReader {
  isJsonFile(path: string) {
    return path.endsWith(".json");
  }

  readText(file: string) {
    return fs.readFileSync(file, "utf-8").toString();
  }

  readJson(file: string) {
    return JSON.parse(this.readText(file));
  }
}

const fileReader = new FileReader();
const dirScraper = new DirectoryScraper("./data", fileReader);
const output = dirScraper.scanFiles();
console.log(output);

