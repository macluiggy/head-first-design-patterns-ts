export default class HeartModel {
    heartRate: number = 80;
    observers: any[] = [];
    interval: NodeJS.Timeout;

    constructor() {
        this.interval = setInterval(() => this.beat(), 1000);
    }

    beat() {
        this.heartRate += Math.floor(Math.random() * 2) - 1;
        this.notifyObservers();
    }

    registerObserver(o: any) {
        this.observers.push(o);
    }

    removeObserver(o: any) {
        let i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }

    notifyObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            let observer = this.observers[i];
            observer.updateHeartRate();
        }
    }

    getHeartRate() {
        return this.heartRate;
    }
}