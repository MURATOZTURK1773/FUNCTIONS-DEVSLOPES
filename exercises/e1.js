// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.

/**
 * ====================================================
 * Create a function to work as follows:
  * The function name is 'logMessage' strictly.
  * The function logs a message in the console.
  * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
*/

// Your code goes here

// function logMessage() {
//   console.log("Hello, World!");
// }
const logMessage = () => { console.log("Hello, World!") };

/**
 * =============================================================
 * Create a function that works as follows:
  * The function name is 'logMyMessage' strictly.
  * The function logs a specific message in the console.
  * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
*/

// Your code goes here...

const logMyMessage = (MyMessage) => { console.log(MyMessage) };

/**
 * ===============================================================
 * Create a  function that works as follows:
  * The function name is 'logMessageWithMyName' strictly.
  * The function logs a message of 'My name is <name>!'.
  * The name is a string value passed as an argument
 * logMessageWithMyName('Andrey') => 'My name is Andrey!'
*/

// Your code goes here...

const logMessageWithMyName = (name) => { console.log(`My name is ${name}!`) };


/**
 * ==============================================================
 * Create a function that works as follows:
  * the function name is 'logMyInfo' strictly.
  * The function of logs a message of 'My name is <name>, I am <age> years old!'.
  * The name is a string value passed as an argument.
  * The age is a number value passed as an argument.
 * logMyData('Andrey', 18) => 'My name is Andrey. I am 18 years old!'
*/

// Your code goes here...

const logMyInfo = (name, age) => { (console.log(`My name is ${name}. I am ${age} years old!`)) };


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyData: logMyInfo || undefined
}

export { f };
