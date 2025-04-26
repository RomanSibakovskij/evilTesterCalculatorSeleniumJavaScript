# evilTesterCalculatorSeleniumJavaScript

Simple Selenium test suite on basic calculator functionality. The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//positive calculator tests

//valid addition tests

1. // Test 001a -> valid two numbers addition test (with a single random generated number)
2. //Test 001 -> valid two numbers addition (manual keypad input)
3. //Test 001b -> valid two numbers addition test (manual keypad input (with decimals))
   
//valid subtraction tests

1. //Test 002 -> valid two numbers subtraction test (manual keypad input)
2. //Test 002a -> valid two numbers subtraction test (with a single random generated number)
3. //Test 002b -> valid two numbers subtraction test (manual keypad input (with decimals))
   
//valid multiplication tests

1. //Test 003 -> valid two numbers multiplication test (manual keypad input)
2. //Test 003a -> valid two numbers multiplication test (with a single random generated number)
3. //Test 003b -> valid two numbers multiplication test (manual keypad input (with decimals))
   
//valid division tests

1. //Test 004 -> valid two numbers division test (manual keypad input)
2. //Test 004a -> valid two numbers division test (with a single random generated number)
3. //Test 004b -> valid two numbers division test (manual keypad input (with decimals))
//valid multiple numbers multiplication

1. //Test 005 -> valid multiple numbers multiplication test (manual keypad input)
   
//negative calculator tests

1. //Test 006 -> invalid two numbers division (division by zero) test (one random number)

2. //Test 006a -> invalid addition test - one input as a string (manual keypad input)
3. //Test 006b -> invalid subtraction test - one input as a string (manual keypad input)
4. //Test 006c -> invalid multiplication test - one input as a string (manual keypad input)
5. //Test 006d -> invalid division test one input as a string (manual keypad input)
   
//calculator functions test

1. // Test 007 -> all clear button functionality test
2. //Test 007a -> clear entry button functionality test
3. //Test 007b -> memory recall and memory plus button functionalities test (they both work together, not separately)
4. //Test 007c -> memory in button functionalities test (they both work together, not separately)
