import { app, BrowserWindow } from "electron";

class MyFrame extends BrowserWindow {
  private window: BrowserWindow | null;

  constructor(title: string) {
    super({
      width: 300,
      height: 300,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
    this.window = null;
    this.createWindow();
    
  }

  createWindow() {
    this.window = new BrowserWindow({
      width: 300,
      height: 300,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    this.window.loadURL(
      `data:text/html, <body onload="document.body.innerText='I rule!!'"></body>`
    );
    this.window.on("closed", () => {
      this.window = null;
    });
  }
}

new MyFrame("Head First Design Patterns");
