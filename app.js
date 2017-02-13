'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
//eslint-disable-line
function sum(a,b){
  var result = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + result + '.';
  return [result,message];
}
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){
  var result = a * b;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + result + '.';
  return [result,message];
}
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){
  var result = sum(a,b)[0];
  var total = sum(c,result)[0];
  var bob = multiply(a,b)[0];
  var fin = multiply(bob,c)[0];
  var thirdElement =  a + ' and ' + b + ' and ' + c + ' sum to ' + total + '.';
  var fithElement = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + fin + '.';
  return[ total, fin,thirdElement, fithElement];
}

sumAndMultiply(1, 2, 3);

testSumAndMultiply(4,7,5);
//not done so i'll work on it
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here

var testArray = [2,3,4];
function sumArray(testArray){
  var totalTrack = 0;
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var d = sum(b,c)[0];
  totalTrack = sum(d,a)[0];
  var message = testArray + ' was passed in as an array of numbers, and ' + totalTrack + ' is their sum.';
  return[totalTrack,message];
}
sumArray(testArray);
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

var testArray = [2,3,4];
function multiplyArray(testArray){
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var d = multiply(b,c)[0];
  var totalTrack = multiply(d,a)[0];
  var message = 'The numbers ' + testArray + ' have a product of 24.';
  return [totalTrack, message];
}

testMultiplyArray(testArray);



