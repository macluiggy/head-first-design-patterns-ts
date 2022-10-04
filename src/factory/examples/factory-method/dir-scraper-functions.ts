import fs from "fs";

interface IFileReader {
  isJsonFile: (path: string) => boolean;
  readText(file: string): string;
  readJson(file: string): unknown;
}

const createDirectoryScraper = (fileReader: IFileReader) => {
  return (dirPath: string) =>
    fs.readdirSync(dirPath).reduce<Record<string, unknown>>((acc, file) => {
      if (fileReader.isJsonFile(file)) {
        acc[file] = fileReader.readJson(`${dirPath}/${file}`);
      } else {
        acc[file] = fileReader.readText(`${dirPath}/${file}`);
      }
      return acc;
    }, {});
};

const fileReader = (): IFileReader => ({
  isJsonFile(path: string) {
    return path.endsWith(".json");
  },

  readText(file: string) {
    return fs.readFileSync(file, "utf-8").toString();
  },

  readJson(file: string) {
    return JSON.parse(this.readText(file));
  },
});

// const fileReader = fileReader();
const dirScraper = createDirectoryScraper(fileReader());
const output = dirScraper("./data");
// const output = dirScraper.scanFiles();
console.log(output);
