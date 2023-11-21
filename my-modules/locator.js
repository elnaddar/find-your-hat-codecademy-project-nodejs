class Locator {
    constructor(boundries, initPos = [0, 0]) {
        this.getInitPos = () => initPos;
        this.getBoundries = () => boundries;
        this.currentLocation = initPos;
    }

    get xBoundries() {
        return this.getBoundries()[0];
    }

    get yBoundries() {
        return this.getBoundries()[1];
    }

    get x() {
        return this.currentLocation[0];
    }

    get y() {
        return this.currentLocation[1];
    }

    get canGoBottom() {
        return this.x + 1 < this.xBoundries;
    }

    get canGoTop() {
        return this.x - 1 >= 0;
    }

    get canGoRight() {
        return this.y + 1 < this.yBoundries;
    }

    get canGoLeft() {
        return this.y - 1 >= 0;
    }

    goTo(dir) {
        let loc = this.peak(dir);
        if (loc != null) {
            this.currentLocation = loc;
        } else {
            console.log(`You can't go ${dir}`);
        }
        return loc;
    }

    peak(dir) {
        let [x, y] = this.currentLocation;
        switch (dir) {
            case 'd':
                return this.canGoBottom ? [x + 1, y] : null;
            case 't':
                return this.canGoTop ? [x - 1, y] : null;
            case 'r':
                return this.canGoRight ? [x, y + 1] : null;
            case 'l':
                return this.canGoLeft ? [x, y - 1] : null;
            default:
                return null;
        }
    }

}

module.exports = { Locator };