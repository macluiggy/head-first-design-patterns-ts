import fs from "fs";

interface IFileReader {
  isJsonFile: (path: string) => boolean;
  readText(file: string): string;
  readJson(file: string): unknown;
}

abstract class DirectoryScraper {
  constructor(public dirPath: string) {
    this.dirPath = dirPath;
  }

  scanFiles() {
    return fs
      .readdirSync(this.dirPath)
      .reduce<Record<string, unknown>>((acc, file) => {
        if (this.isJsonFile(file)) {
          acc[file] = this.readJson(`${this.dirPath}/${file}`);
        } else {
          acc[file] = this.readText(`${this.dirPath}/${file}`);
        }
        return acc;
      }, {});
  }

  abstract isJsonFile(path: string): boolean;
  abstract readText(file: string): string;
  abstract readJson(file: string): unknown;
}

class FileReader extends DirectoryScraper {
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

const fileReader = new FileReader('./data');
// const dirScraper = new DirectoryScraper("./data", fileReader);
const output = fileReader.scanFiles();
console.log(output);

