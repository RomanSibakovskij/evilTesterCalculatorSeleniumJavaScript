const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Calculator Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function() {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //positive calculator tests

    //valid addition tests

    //Test 001 -> valid two numbers addition (manual keypad input)
    test('Valid Two Numbers Addition Test (manual numbers key input)', async function() {
        await testMethods.validManualTwoNumbersAdditionTest();
    });

    // Test 001a -> valid two numbers addition test (with a single random generated number)
    test('Valid Two Numbers Addition Test (manual numbers key with a random number input)', async function() {
        await testMethods.validTwoNumbersOneRandomAdditionTest();
    });

    //Test 001b -> valid two numbers addition test (manual keypad input (with decimals))
    test('Valid Two Numbers Addition Test (manual numbers key input (with decimals)', async function() {
        await testMethods.validTwoDecimalNumbersAdditionTest();
    });

    //valid subtraction tests

    //Test 002 -> valid two numbers subtraction test (manual keypad input)
    test('Valid Two Numbers Subtraction Test (manual numbers key input)', async function() {
        await testMethods.validManualTwoNumbersSubtractionTest();
    });

    //Test 002a -> valid two numbers subtraction test (with a single random generated number)
    test('Valid Two Numbers Subtraction Test (manual numbers key with a random number input)', async function() {
        await testMethods.validTwoNumbersOneRandomSubtractionTest();
    });

    //Test 002b -> valid two numbers subtraction test (manual keypad input (with decimals))
    test('Valid Two Numbers Subtraction Test (manual numbers key input (with decimals)', async function() {
        await testMethods.validManualTwoDecimalNumbersSubtractionTest();
    });

    //valid multiplication tests

    //Test 003 -> valid two numbers multiplication test (manual keypad input)
    test('Valid Two Numbers Multiplication Test (manual numbers key input)', async function() {
        await testMethods.validManualTwoNumbersMultiplicationTest();
    });

    //Test 003a -> valid two numbers multiplication test (with a single random generated number)
    test('Valid Two Numbers Multiplication Test (manual numbers key with a random number input)', async function() {
        await testMethods.validTwoNumbersOneRandomMultiplicationTest();
    });

    //Test 003b -> valid two numbers multiplication test (manual keypad input (with decimals))
    test('Valid Two Numbers Multiplication Test (manual numbers key input (with decimals)', async function() {
        await testMethods.validManualTwoDecimalNumbersMultiplicationTest();
    });

    //valid division tests

    //Test 004 -> valid two numbers division test (manual keypad input)
    test('Valid Two Numbers Division Test (manual numbers key input)', async function() {
        await testMethods.validManualTwoNumbersDivisionTest();
    });

    //Test 004a -> valid two numbers division test (with a single random generated number)
    test('Valid Two Numbers Division Test (manual numbers key with a random number input)', async function() {
        await testMethods.validTwoNumbersOneRandomDivisionTest();
    });

    //Test 004b -> valid two numbers division test (manual keypad input (with decimals))
    test('Valid Two Numbers Division Test (manual numbers key input (with decimals)', async function() {
        await testMethods.validManualTwoDecimalNumbersDivisionTest();
    });

    //valid multiple numbers multiplication

    //Test 005 -> valid multiple numbers multiplication test (manual keypad input)
    test('Valid Multiple Numbers Multiplication Test (manual numbers key input)', async function() {
        await testMethods.validManualMultipleNumbersMultiplicationTest();
    });

    //negative calculator tests

    //Test 006 -> invalid two numbers division (division by zero) test (one random number)
    test('Invalid Division By Zero Test (manual numbers key with a random number input))', async function() {
        await testMethods.invalidManualDivisionByZeroTest();
    });

    //Test 006a -> invalid addition test - one input as a string (manual keypad input)
    test('Invalid Addition Test - One Input As String (manual numbers key input)', async function() {
        await testMethods.invalidManualOneStringAdditionTest();
    });

    //Test 006b -> invalid subtraction test - one input as a string (manual keypad input) (test has failed - it's 0 instead of 'NaN')
    test('Invalid Subtraction Test - One Input As String (manual numbers key input)', async function() {
        await testMethods.invalidManualOneStringSubtractionTest();
    });

    //Test 006c -> invalid multiplication test - one input as a string (manual keypad input) (test has failed - it's 1764 instead of 'NaN')
    test('Invalid Two Numbers Multiplication Test (manual numbers key input)', async function() {
        await testMethods.invalidManualOneStringMultiplicationTest();
    });

    //Test 006d -> invalid division test one input as a string (manual keypad input) (test has failed - it's 1 instead of 'NaN')
    test('Invalid Two Numbers Division Test (manual numbers key input)', async function() {
        await testMethods.invalidManualOneStringDivisionTest();
    });

    //calculator functions test

    // Test 007 -> all clear button functionality test
    test('"All Clear" Functionality Test', async function() {
        //valid numbers addition test
        await testMethods.validTwoNumbersOneRandomAdditionTest();
        //'All Clear' functionality test
        await testMethods.clickAllClearButtonTest();
    });

    //Test 007a -> clear entry button functionality test
    test('"Clear Entry" Functionality Test (manual numbers key with a random number input)', async function() {
        //valid numbers division test
        await testMethods.validTwoNumbersOneRandomDivisionTest();
        //'Clear Entry' functionality test
        await testMethods.clickClearEntryButtonTest();
    });

    //Test 007b -> memory recall and memory plus button functionalities test (they both work together, not separately)
    test('"Memory Recall" and "Memory Plus" Functionalities Test', async function() {
        await testMethods.clickMemoryPlusAndMemoryRecallButtonsTest();
    });

    //Test 007c -> memory in button functionalities test (they both work together, not separately)
    test('"Memory In" Functionality Test', async function() {
        await testMethods.clickMemoryInButtonTest();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });
});
