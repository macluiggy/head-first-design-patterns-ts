import FileSystemItem from "./FileSystemItem";
import Directory from "./Directory";
import File from "./File";

export default class FileSystemTestDrive {
  public static main(): void {
    const root = new Directory("Root");
    const home = new Directory("Home");
    const pictures = new Directory("Pictures");
    const music = new Directory("Music");
    const video = new Directory("Video");

    const file1 = new File("File1", 100);
    const file2 = new File("File2", 200);
    const file3 = new File("File3", 300);
    const file4 = new File("File4", 400);
    const file5 = new File("File5", 500);
    const file6 = new File("File6", 600);
    const file7 = new File("File7", 700);
    const file8 = new File("File8", 800);
    const file9 = new File("File9", 900);
    const file10 = new File("File10", 1000);

    root.add(home);
    root.add(file1);

    home.add(pictures);
    home.add(music);
    home.add(file2);

    pictures.add(file3);
    pictures.add(file4);

    music.add(file5);
    music.add(file6);

    root.add(video);
    root.add(file7);

    video.add(file8);
    video.add(file9);
    video.add(file10);

    root.print();
    console.log(`Total Size: ${root.getSize()}KB`);
  }
}

FileSystemTestDrive.main();
