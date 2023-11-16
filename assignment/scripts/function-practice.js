console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
};
// Call the function to test
hello();
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'Your Name';

function helloName() {
  console.log( 'in helloName function');
  return 'Hello, ' + name + '!';
}; // end of helloName function

// Remember to call the function to test
console.log( helloName() );

// 3. Function to add two numbers together & return the result
let firstNumber;
let secondNumber;

function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers Function')
  return firstNumber + secondNumber;
}; // end of addNumbers function

console.log( '=== !!! addNumbers Test !!! ===')
console.log( 'addNumbers Test 36, 54: ', addNumbers( 36, 54));
console.log( 'addNumbers Test 5, 6: ', addNumbers( 5, 6));
console.log( 'addNumbers Test 15, 3: ', addNumbers( 15, 3));
console.log( 'addNumbers Test 25, 9: ', addNumbers( 25, 9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  console.log( 'in multiplyThree Function: ' )
  return firstNumber * secondNumber * thirdNumber;
}; // End of multiplyThree Function

console.log( '=== !!! multiplyThree Test !!! ===')
console.log( 'multiplyThree 2, 3, 4: ', multiplyThree( 2, 3, 4) );
console.log( 'multiplyThree 1, 10, 10: ', multiplyThree( 1, 10, 10) );
console.log( 'multiplyThree 5, 6, 9: ', multiplyThree( 5, 6, 9) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    console.log( 'In isPositive Function')
    return 'Number is positive: ', true;
  } else{
  return 'Number is positive: ', false;
  }
};

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( '=== !!! isPositive Test !!! ===')
console.log( 'Is positive? (-2)', isPositive(-2));
console.log( 'Is positive? (3)', isPositive(3));
console.log( 'Is positive? (-0.5)', isPositive(-0.5));
console.log( 'Is positive? (5)', isPositive(5));
console.log( 'Is positive? (-10)', isPositive(-10));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

console.log( '=== !!! getLast Function !!! ===')

function getLast(array) {
  console.log('In getLast Function');
  lastItem = array[array.length-1]
  return lastItem
};

// Test to see if our code works:
let bts = [ 'Namjoon', 'J-HOPE', 'Jungkook', 'Jin', 'Jimin', 'Suga', 'V'];
let array = bts;
console.log(getLast(bts));

let BIGBANG = [ 'GDragon', 'TOP', 'Taeyang', 'Daesung', 'Seungri'];
array = BIGBANG;
console.log(getLast(BIGBANG));
//Confirmed it works!

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
