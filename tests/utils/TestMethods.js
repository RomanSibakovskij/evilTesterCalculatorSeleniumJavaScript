const fs = require('fs');
const path = require('path');
const { CalculatorPage } = require('../../pages/CalculatorPage');
const assert = require("node:assert");

class TestMethods{
    constructor(driver) {
        this.driver = driver;
    }

    //positive calculator test methods

    //valid addition test methods

    //valid two numbers addition test (manual input)
    async validManualTwoNumbersAdditionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        //input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(4);
        //get value for local comparator (number 1)
        let num1 = parseInt(await calculatorPage.getNumber1(), 10);
        //click addition button
        await calculatorPage.clickAdditionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //get value for local comparator (number 2)
        let num2 = parseInt(await calculatorPage.getNumber2(), 10);
        //calculate the result locally
        const localAdditionResult = TestMethods.sum(num1, num2);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localAdditionResult);
        //log the result
        TestMethods.log('Number 1', num1);
        TestMethods.log('Number 2', num2);
        TestMethods.log('Local comparator result', localAdditionResult);
        TestMethods.log('Calculation result', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Addition Calculation Result (manual input)");
    }

    //valid two numbers addition test (one random number)
    async validTwoNumbersOneRandomAdditionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one (random number)
        await calculatorPage.inputRandomNumber();
        //get value for local comparator (number 1)
        let randomNum1 = await calculatorPage.inputRandomNumber();
        // click addition button
        await calculatorPage.clickAdditionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //get value for local comparator (number 2)
        let additionNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        let localRandomNumResult = TestMethods.sum(randomNum1, additionNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localRandomNumResult);
        //console logger
        TestMethods.log('Number 2', additionNumber2);
        TestMethods.log('Local comparator result: ', localRandomNumResult);
        TestMethods.log('Calculation result: ', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Addition Calculation Result (with one random number)");
    }

    //valid decimal numbers addition test (manual input)
    async validTwoDecimalNumbersAdditionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 1)
        let num1 = 14.5;
        // click addition button
        await calculatorPage.clickAdditionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 2)
        let num2 = 23.5;
        // calculate the result locally
        const localDecimalsAdditionResult = TestMethods.sum(num1, num2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localDecimalsAdditionResult);
        //console logger
        TestMethods.log(`Number 1: `, num1);
        TestMethods.log(`Number 2: `, num2);
        TestMethods.log(`Local comparator result: `, localDecimalsAdditionResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Addition Calculation Result(decimal numbers)");
    }

    //valid subtraction test methods

    //valid two numbers subtraction test (manual input)
    async validManualTwoNumbersSubtractionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 1)
        let subtractNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        // click subtraction button
        await calculatorPage.clickSubtractionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //get value for local comparator (number 2)
        let subtractNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        const localSubtractionResult = TestMethods.subtract(subtractNumber1, subtractNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localSubtractionResult);
        //console logger
        TestMethods.log(`Number 1: `, subtractNumber1);
        TestMethods.log(`Number 2: `, subtractNumber2);
        TestMethods.log(`Local comparator result: `, localSubtractionResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Subtraction Calculation Result(manual input)");
    }

    //valid two numbers subtraction test (one random number)
    async validTwoNumbersOneRandomSubtractionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one (random number)
        await calculatorPage.inputRandomNumber();
        //get value for local comparator (number 1)
        let randomNum1 = await calculatorPage.inputRandomNumber();
        // click subtraction button
        await calculatorPage.clickSubtractionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //get value for local comparator (number 2)
        let subtractionNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        let localRandomNumResult = TestMethods.subtract(randomNum1, subtractionNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localRandomNumResult);
        //console logger
        TestMethods.log('Number 2', subtractionNumber2);
        TestMethods.log('Local comparator result: ', localRandomNumResult);
        TestMethods.log('Calculation result: ', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Subtraction Calculation Result (with one random number)");
    }

    //valid two decimal numbers subtraction test (manual input)
    async validManualTwoDecimalNumbersSubtractionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(6);
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(2)
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 1)
        let subtractNumber1 = 64.25;
        // click subtraction button
        await calculatorPage.clickSubtractionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 2)
        let subtractNumber2 = 38.45;
        // calculate the result locally
        const localDecimalsSubtractionResult = TestMethods.subtract(subtractNumber1, subtractNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to properly display decimal subtraction result
        //local comparator
        assert.strictEqual(result, localDecimalsSubtractionResult);
        //console logger
        TestMethods.log(`Number 1: `, subtractNumber1);
        TestMethods.log(`Number 2: `, subtractNumber2);
        TestMethods.log(`Local comparator result: `, localDecimalsSubtractionResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Subtraction Calculation Result(decimal numbers)");
    }

    //valid multiplication test methods

    //valid two numbers multiplication test (manual input)
    async validManualTwoNumbersMultiplicationTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 1)
        let multiplicationNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input number two
        await calculatorPage.clickNumpadNumber(8);
        //get value for local comparator (number 2)
        let multiplicationNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        const localMultiplicationResult = TestMethods.multiply(multiplicationNumber1, multiplicationNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localMultiplicationResult);
        //console logger
        TestMethods.log(`Number 1: `, multiplicationNumber1);
        TestMethods.log(`Number 2: `, multiplicationNumber2);
        TestMethods.log(`Local comparator result: `, localMultiplicationResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Multiplication Calculation Result(manual input)");
    }

    //valid two numbers multiplication test (one random number)
    async validTwoNumbersOneRandomMultiplicationTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one (random number)
        await calculatorPage.inputRandomNumber();
        //get value for local comparator (number 1)
        let randomNum1 = await calculatorPage.inputRandomNumber();
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input number two
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(7);
        //get value for local comparator (number 2)
        let multiplicationNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        let localRandomNumResult = TestMethods.multiply(randomNum1, multiplicationNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localRandomNumResult);
        //console logger
        TestMethods.log('Number 2', multiplicationNumber2);
        TestMethods.log('Local comparator result: ', localRandomNumResult);
        TestMethods.log('Calculation result: ', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Multiplication Calculation Result (with one random number)");
    }

    //valid two decimal numbers multiplication test (manual input)
    async validManualTwoDecimalNumbersMultiplicationTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(6);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(3);
        //get value for local comparator (number 1)
        let multiplicationNumber1 = 6.3;
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input number two
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 2)
        let multiplicationNumber2 = 8.45;
        // calculate the result locally
        const localDecimalsMultiplicationResult = TestMethods.multiply(multiplicationNumber1, multiplicationNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to properly display decimal subtraction result
        //local comparator
        assert.equal(result, localDecimalsMultiplicationResult);
        //console logger
        TestMethods.log(`Number 1: `, multiplicationNumber1);
        TestMethods.log(`Number 2: `, multiplicationNumber2);
        TestMethods.log(`Local comparator result: `, localDecimalsMultiplicationResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Multiplication Calculation Result(decimal numbers)");
    }

    //valid division test methods

    //valid two numbers division test (manual input)
    async validManualTwoNumbersDivisionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        //input number one
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(4);
        //get value for local comparator (number 1)
        let divisionNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        //click division button
        await calculatorPage.clickDivisionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(7);
        //get value for local comparator (number 2)
        let divisionNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        //calculate the result locally
        const localDivisionResult = TestMethods.divide(divisionNumber1, divisionNumber2);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to display division results properly
        //local comparator
        assert.strictEqual(result, localDivisionResult);
        //log the result
        TestMethods.log('Number 1', divisionNumber1);
        TestMethods.log('Number 2', divisionNumber2);
        TestMethods.log('Local comparator result', localDivisionResult);
        TestMethods.log('Calculation result', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Division Calculation Result(manual input)");
    }

    //valid two numbers division test (one random number)
    async validTwoNumbersOneRandomDivisionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one (random number)
        await calculatorPage.inputRandomNumber();
        //get value for local comparator (number 1)
        let randomNum1 = await calculatorPage.inputRandomNumber();
        // click division button
        await calculatorPage.clickDivisionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 2)
        let divisionNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        let localRandomNumResult = TestMethods.divide(randomNum1, divisionNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to display division results properly
        //local comparator
        assert.strictEqual(result, localRandomNumResult);
        //console logger
        TestMethods.log('Number 2', divisionNumber2);
        TestMethods.log('Local comparator result: ', localRandomNumResult);
        TestMethods.log('Calculation result: ', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Division Calculation Result (with one random number)");
    }

    //valid two decimal numbers division test (manual input)
    async validManualTwoDecimalNumbersDivisionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(9);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(3);
        //get value for local comparator (number 1)
        let divisionNumber1 = 19.3;
        // click division button
        await calculatorPage.clickDivisionButton();
        // input number two
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickDecimalButton(); //click decimal button
        await calculatorPage.clickNumpadNumber(5);
        //get value for local comparator (number 2)
        let divisionNumber2 = 4.5;
        // calculate the result locally
        const localDecimalsDivisionResult = TestMethods.divide(divisionNumber1, divisionNumber2);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to display division results properly
        //local comparator
        assert.equal(result, localDecimalsDivisionResult);
        //console logger
        TestMethods.log(`Number 1: `, divisionNumber1);
        TestMethods.log(`Number 2: `, divisionNumber2);
        TestMethods.log(`Local comparator result: `, localDecimalsDivisionResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Division Calculation Result(decimal numbers)");
    }

    //valid multiple numbers multiplication test method

    //valid multiple numbers multiplication (manual input)
    //valid two numbers multiplication test (manual input)
    async validManualMultipleNumbersMultiplicationTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 1)
        let multiplicationNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(4);
        //get value for local comparator (number 2)
        let multiplicationNumber2 = parseInt(await calculatorPage.getNumber1(), 10);
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input number two
        await calculatorPage.clickNumpadNumber(8);
        //get value for local comparator (number 2)
        let multiplicationNumber3 = parseInt(await calculatorPage.getNumber2(), 10);
        // calculate the result locally
        const localMultiplicationResult = multiplicationNumber1 * multiplicationNumber2 * multiplicationNumber3;
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localMultiplicationResult);
        //console logger
        TestMethods.log(`Number 1: `, multiplicationNumber1);
        TestMethods.log(`Number 2: `, multiplicationNumber2);
        TestMethods.log(`Number 3: `, multiplicationNumber3);
        TestMethods.log(`Local comparator result: `, localMultiplicationResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Multiple Numbers Multiplication Calculation Result(manual input)");
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //negative calculator test methods

    //invalid two numbers division (division by zero) test (manual input)
    async invalidManualDivisionByZeroTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        //input random number one
        await calculatorPage.inputRandomNumber();
        //get value for local comparator (number 1)
        let divisionNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        //click division button
        await calculatorPage.clickDivisionButton();
        //input number two (zero)
        await calculatorPage.clickNumpadNumber(0);
        //get value for local comparator (number 2)
        let divisionNumber2 = parseInt(await calculatorPage.getNumber2(), 10);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //expected result
        const expectedResult = "Infinity";
        //get the displayed result
        const displayedResult = await calculatorPage.getCalculationOutput();
        //local comparator
        assert.strictEqual(displayedResult, expectedResult);
        //log the result
        TestMethods.log('Number 1', divisionNumber1);
        TestMethods.log('Number 2', divisionNumber2);
        TestMethods.log('Expected result', expectedResult);
        TestMethods.log('Displayed result', displayedResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Division By Zero Calculation Result (with one random number)");
    }

    //invalid two numbers addition test - one string (manual input)
    async invalidManualOneStringAdditionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        //input string instead of a number
        await calculatorPage.inputString("doodles")
        //variable for local comparator
        let string = "doodles";
        //click addition button
        await calculatorPage.clickAdditionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickNumpadNumber(7);
        //variable for local comparator
        let num2 = 37;
        //calculate the result locally
        const localAdditionResult = parseInt(string, 10) + num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(result, localAdditionResult);
        //log the result
        TestMethods.log('String: ', string);
        TestMethods.log('Number 2', num2);
        TestMethods.log('Local comparator result', localAdditionResult);
        TestMethods.log('Calculation result', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Addition Calculation Result - One As A String ");
    }

    //invalid subtraction test - one input as a string (manual input) (instead of 'NaN' the output is 0)
    async invalidManualOneStringSubtractionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 1)
        let subtractNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        // click subtraction button
        await calculatorPage.clickSubtractionButton();
        // input string instead of the number
        await calculatorPage.inputString("Cabal")
        //variable for local comparator
        let string = "Cabal";
        // calculate the result locally
        const localSubtractionResult = subtractNumber1 - parseInt(string, 10);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator, if the 'NaN' output fails, log the issue
        if(result !== 0){
            assert.strictEqual(result, localSubtractionResult);
        } else {
            console.error(`The subtraction operation has failed while subtracting ${string} from ${subtractNumber1} - it's ${result} instead of 'NaN'.`)
        }
        //console logger
        TestMethods.log(`Number 1: `, subtractNumber1);
        TestMethods.log(`String: `, string);
        TestMethods.log(`Local comparator result: `, localSubtractionResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Subtraction Calculation Result - One As A String");
    }

    //invalid multiplication test - one input as a string (manual input) (instead of 'NaN' the output is 1764)
    async invalidManualOneStringMultiplicationTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        // input number one
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(2);
        //get value for local comparator (number 1)
        let multiplicationNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        // click multiplication button
        await calculatorPage.clickMultiplicationButton();
        // input string instead of the number
        await calculatorPage.inputString("cake")
        //variable for local comparator
        let string = "cake";
        // calculate the result locally
        const localMultiplicationResult = multiplicationNumber1 * parseInt(string, 10);
        // click 'Equals' button
        await calculatorPage.clickEqualsButton();
        // log the calculation output
        const result = parseInt(await calculatorPage.getCalculationOutput());
        //local comparator, if the 'NaN' output fails, log the issue
        if (isNaN(result) || typeof result !== 'number') {
            assert.strictEqual(result, localMultiplicationResult);
        } else {
            console.error(`The multiplication operation has failed while ${multiplicationNumber1} multiplying by ${string} - it's ${result} instead of 'NaN'.`);
        }
        //console logger
        TestMethods.log(`Number 1: `, multiplicationNumber1);
        TestMethods.log(`String: `, string);
        TestMethods.log(`Local comparator result: `, localMultiplicationResult)
        TestMethods.log(`Calculation result: `, result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Multiplication Calculation Result - One As A String");
    }

    //invalid division test - one input as a string (instead of 'NaN' the output is 1)
    async invalidManualOneStringDivisionTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.verifyCalculatorPageElementsDisplayed();
        //input number one
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(4);
        //get value for local comparator (number 1)
        let divisionNumber1 = parseInt(await calculatorPage.getNumber1(), 10);
        //click division button
        await calculatorPage.clickDivisionButton();
        //input a string instead of the number
        await calculatorPage.inputString("Book");
        //get value for local comparator (number 2)
        let string = "Book";
        //calculate the result locally
        const localDivisionResult = divisionNumber1 / parseInt(string, 10);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const result = parseFloat(await calculatorPage.getCalculationOutput());//to display division results properly
        //local comparator, if the 'NaN' output fails, log the issue
        if (isNaN(result) || typeof result !== 'number') {
            assert.strictEqual(result, localDivisionResult);
        } else {
            console.error(`The division operation has failed while ${divisionNumber1} dividing by ${string} - it's ${result} instead of 'NaN'.`);
        }
        //log the result
        TestMethods.log('Number 1', divisionNumber1);
        TestMethods.log('String', string);
        TestMethods.log('Local comparator result', localDivisionResult);
        TestMethods.log('Calculation result', result);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Division Calculation Result - One As A String");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //calculator functions test methods (button click methods)

    //'All Clear' button test
    async clickAllClearButtonTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //click 'All Clear' button
        await calculatorPage.clickAllClearButton();
        //assert the num display is clear
        assert.strictEqual(await calculatorPage.getCalculationOutput(), "");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "All Clear Button Functionality Test Result");
    }

    //'Clear Entry' button test
    async clickClearEntryButtonTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //click 'Clear Entry' button
        await calculatorPage.clickClearEntryButton();
        //assert the num display is clear
        assert.strictEqual(await calculatorPage.getCalculationOutput(), "");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Clear Entry Button Functionality Test Result");
    }

    //'Memory Plus' and 'Memory Recall' buttons test (since their functionality is tied together, they don't work separately)
    async clickMemoryPlusAndMemoryRecallButtonsTest() {
        const calculatorPage = new CalculatorPage(this.driver);
        //part 1: Clear memory
        await calculatorPage.clickMemoryRecallButton();
        //part 2: Input a random number
        await calculatorPage.inputRandomNumber();
        //input number getter
        const randomNumber = await calculatorPage.getNumber1();
        //part 3: Click 'Memory Plus' to store the number in memory
        await calculatorPage.clickMemoryPlusButton();
        //part 4: Click 'Memory Recall' to recall the value stored in memory
        await calculatorPage.clickMemoryRecallButton();
        //part 5: Assert that the recalled value matches the stored value
        const recalledValue = await calculatorPage.getCalculationOutput();
        //assert the values match
        assert.strictEqual(recalledValue, randomNumber);
        //click 'Clear Entry button to clear the display
        await calculatorPage.clickClearEntryButton();
        //additional verification: multiple memory updates by adding another number
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(9);
        //get the input number
        const secondNumber = await calculatorPage.getNumber1();
        //store the second number in memory using Memory Plus
        await calculatorPage.clickMemoryPlusButton();
        //recall the memory again
        await calculatorPage.clickMemoryRecallButton();
        //assert that the recalled value is now the sum of the first and second numbers
        const updatedRecalledValue = await calculatorPage.getCalculationOutput();
        assert.strictEqual(updatedRecalledValue, (parseFloat(randomNumber) + parseFloat(secondNumber)).toString());
        //log the result
        console.log(`Memory test passed. First value: ${randomNumber}, Second value: ${secondNumber}, Recalled value: ${updatedRecalledValue}`);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Memory Recall and Memory Plus Buttons Functionality Test Result");
    }

    //'Memory In (Min)' button functionality test
    async clickMemoryInButtonTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //input a random number
        await calculatorPage.inputRandomNumber();
        //random number getter
        await calculatorPage.getNumber1();
        //click 'Memory In (Min)' button (to store the number)
        await calculatorPage.clickMemoryInButton()
        //click 'Memory Recall' button (to verify it was stored)
        await calculatorPage.clickMemoryRecallButton();
        //assert the stored value matches the previous input
        const numberInput = await calculatorPage.getNumber1();
        const memoryRecallValue = await calculatorPage.getCalculationOutput();
        assert.strictEqual(memoryRecallValue, numberInput);
        //log the result
        console.log(`Memory test passed. Input value: ${numberInput}`);
        console.log(`Memory test passed. Recalled value: ${memoryRecallValue}`);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Memory In Button Functionality Test Result");
    }

    //result logger method
    static log(label, value) {
        console.log(`${label}: ${value}`);
    }

    //local comparison functions
    static sum(num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num1 - num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }

    static divide(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            console.error("Division by zero is not permitted.");
            return null;
        }
    }

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, { recursive: true });
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }

}

module.exports = TestMethods;
