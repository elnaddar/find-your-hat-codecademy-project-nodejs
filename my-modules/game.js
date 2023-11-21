const { Locator } = require("./locator");
const prompt = require('prompt-sync')({sigint: true});

class Game {
    constructor(field, theme) {
        this.field = field;
        this.locator = new Locator(field.boundries);
        this.theme = theme;
    }

    play() {
        this.field.print();
        while (true) {
            this.askQuestion();
        }
    }

    askQuestion() {
        const dir = prompt('Which way? ').toLowerCase();
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