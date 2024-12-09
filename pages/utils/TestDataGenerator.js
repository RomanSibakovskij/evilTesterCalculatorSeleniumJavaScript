const BasePage = require('./BasePage');


class TestDataGenerator extends BasePage {
    constructor(driver) {
        super(driver);
        this.maxNumber = 500;
        this.minNumber = 1;
        this.randomNumber = null;
    }

    //random number generator
    getRandomNumber() {
        if (this.randomNumber === null) {
            this.randomNumber = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
            console.log('Random generated number: ' + this.randomNumber);
        }
        return this.randomNumber;
    }
}

module.exports = TestDataGenerator;
