const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');

class CalculatorPage extends BasePage{

    constructor(driver) {
        super(driver);
        this.testDataGenerator = new TestDataGenerator(driver);

        //number display element
        this.numDisplay = By.xpath("//input")

        //numpad elements
        this.numPadKeys = {
            '0': By.xpath('//button[@id="button00"]'),
            '1': By.xpath('//button[@id="button01"]'),
            '2': By.xpath('//button[@id="button02"]'),
            '3': By.xpath('//button[@id="button03"]'),
            '4': By.xpath('//button[@id="button04"]'),
            '5': By.xpath('//button[@id="button05"]'),
            '6': By.xpath('//button[@id="button06"]'),
            '7': By.xpath('//button[@id="button07"]'),
            '8': By.xpath('//button[@id="button08"]'),
            '9': By.xpath('//button[@id="button09"]')
        }

        //functions elements
        this.decimalButton = By.xpath('//button[@id="buttondot"]');
        this.addButton = By.xpath('//button[@id="buttonplus"]');
        this.subtractButton = By.xpath('//button[@id="buttonminus"]');
        this.multiplyButton = By.xpath('//button[@id="buttonmultiply"]');
        this.divideButton = By.xpath('//button[@id="buttondivide"]');
        this.allClearButton = By.xpath('//button[@id="buttonallclear"]');
        this.clearEntryButton = By.xpath('//button[@id="buttonclearentry"]');
        this.memoryPlusButton = By.xpath('//button[@id="buttonmemoryplus"]');
        this.memoryRecallButton = By.xpath('//button[@id="buttonmemoryrecall"]');
        this.memoryInButton = By.xpath('//button[@id="buttonmemoryin"]');
        this.equalsButton = By.xpath('//button[@id="buttonequals"]');
    }

    //calculator page numpad click methods
    async clickNumpadNumber(number) {
        const numberButton = await this.driver.findElement(this.numPadKeys[number]);
        await numberButton.click();
    }

    //calculator functions button click methods
    async clickAdditionButton(){
        const addButton = await this.driver.findElement(this.addButton);
        await addButton.click();
    }

    async clickSubtractionButton(){
        const minusButton = await this.driver.findElement(this.subtractButton);
        await minusButton.click();
    }

    async clickMultiplicationButton(){
        const multiplyButton = await this.driver.findElement(this.multiplyButton);
        await multiplyButton.click();
    }

    async clickDivisionButton(){
        const divideButton = await this.driver.findElement(this.divideButton);
        await divideButton.click();
    }

    async clickDecimalButton(){
        const decimalButton = await this.driver.findElement(this.decimalButton);
        await decimalButton.click();
    }

    async clickAllClearButton(){
        const allClearButton = await this.driver.findElement(this.allClearButton);
        await allClearButton.click();
    }

    async clickClearEntryButton(){
        const clearEntryButton = await this.driver.findElement(this.clearEntryButton);
        await clearEntryButton.click();
    }

    async clickMemoryPlusButton(){
        const memoryPlusButton = await this.driver.findElement(this.memoryPlusButton);
        await memoryPlusButton.click();
    }

    async clickMemoryRecallButton(){
        const memoryRecallButton = await this.driver.findElement(this.memoryRecallButton);
        await memoryRecallButton.click();
    }

    async clickMemoryInButton(){
        const memoryInButton = await this.driver.findElement(this.memoryInButton);
        await memoryInButton.click();
    }

    async clickEqualsButton(){
        const equalsButton = await this.driver.findElement(this.equalsButton);
        await equalsButton.click();
    }

    //random number input method
    async inputRandomNumber(){
        const display = await this.driver.findElement(this.numDisplay);
        const randomNumber = this.testDataGenerator.getRandomNumber();
        await display.clear();
        await display.sendKeys(randomNumber);
        return randomNumber;
    }

    //string input method
    async inputString(string){
        const display = await this.driver.findElement(this.numDisplay);
        await display.clear();
        await display.sendKeys(string);
    }

    //number one getter
    async getNumber1(){
        const numberOneDisplay = await this.driver.findElement(this.numDisplay);
        return await numberOneDisplay.getAttribute("value");
    }
    //number two getter
    async getNumber2(){
        const numberTwoDisplay = await this.driver.findElement(this.numDisplay);
        return await numberTwoDisplay.getAttribute("value");
    }

    //calculator display output getter
    async getCalculationOutput(){
        const outputDisplay = await this.driver.findElement(this.numDisplay);
        return await outputDisplay.getAttribute("value");
    }

    //calculator page web element assert method
    async isCalculatorPageWebElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }
    //calculator page web element assert function
    async verifyCalculatorPageElementsDisplayed() {
        const elementsToCheck = [
            this.numDisplay,
            this.numPadKeys['0'],
            this.numPadKeys['1'],
            this.numPadKeys['2'],
            this.numPadKeys['3'],
            this.numPadKeys['4'],
            this.numPadKeys['5'],
            this.numPadKeys['6'],
            this.numPadKeys['7'],
            this.numPadKeys['8'],
            this.numPadKeys['9'],
            this.addButton,
            this.subtractButton,
            this.multiplyButton,
            this.divideButton,
            this.allClearButton,
            this.clearEntryButton,
            this.memoryPlusButton,
            this.memoryRecallButton,
            this.memoryInButton,
            this.equalsButton
        ];

        //loop through each visual element to assert it's displayed
        for (let element of elementsToCheck) {
            const isDisplayed = await this.isCalculatorPageWebElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }
}
module.exports = {CalculatorPage};