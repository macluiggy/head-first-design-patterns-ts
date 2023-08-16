import Command from "./Command";
import TV from "./TV";

export default class TVOnCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.on();
    }

    public undo(): void {
        this.tv.off();
    }
}