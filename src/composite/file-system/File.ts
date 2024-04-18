import FileSystemItem from "./FileSystemItem";

export default class File implements FileSystemItem {
  name: string;
  size: number;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
  print(): void {
    console.log(`File: ${this.name}, Size: ${this.size}KB`);
  }
  add(fileSystemItem: FileSystemItem): void {
    throw new Error("Method not implemented.");
  }
  remove(fileSystemItem: FileSystemItem): void {
    throw new Error("Method not implemented.");
  }
  getChild(index: number): FileSystemItem {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
}

// gaste mas de 400 latas para que al final la vista se me siga desviando, maldita sea, que porqueria de vista
// parece que no se va a arreglar, que porqueria de vista, no se va a arreglar, que porqueria de vista, no se va a arreglar
// es molesto este ojo derecho, no tengo control como el izquierdo, no tengo control como el izquierdo, no tengo control como el izquierdo
// en serio que estoy arto de entonces pague dinero por gusto, ya que me sigue molestando esta vista de mierda, que porqueria de vista
// que puedo hacer, no tengo dinero para pagar otra operacion
// mi unica esperanza es que se arregle solo, pero no creo que se arregle solo, no creo que se arregle solo, no creo que se arregle solo