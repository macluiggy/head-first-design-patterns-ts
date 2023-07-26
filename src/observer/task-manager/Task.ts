export default class Task {
  private _name: string;
  private _description: string;
  private _completed: boolean;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
    this._completed = false;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }
}