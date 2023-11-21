const { Locator } = require("./locator");

class Game {
    constructor(field, theme) {
        this.field = field;
        this.locator = new Locator(field.boundries);
        this.theme = theme;
    }

    play() {
        this.field.print();
        process.stdin.on('data', this.directionCallback.bind(this));
    }

    directionCallback(data) {
        const dir = data.toString().trim();
        let loc = this.locator.goTo(dir);
        this.gameCase(loc);
    }

    gameCase(loc) {
        if (loc != null) {
            if (this.checkLose(loc)) {
                console.log("It's a hole you lost");
                this.exitGame();
            } else if (this.checkWin(loc)) {
                console.log("Congrats!");
                this.exitGame();
            } else {
                this.field.setLocationTo(loc, this.theme.pathCharacter);
            }
        }
        this.field.print();
    }

    checkLose(loc) {
        return this.field.getLocationVal(loc) == this.theme.hole;
    }

    checkWin(loc) {
        return this.field.getLocationVal(loc) == this.theme.hat;
    }

    exitGame() {
        process.exit();
    }
}

module.exports = { Game };