/*
Write a function that takes a number n and returns the number of stacked boxes 
in a model n levels high, visible and invisible.
*/

function stackBoxes(n) {
  return Math.pow(n, 2);
}

stackBoxes(1); // ➞ 1
stackBoxes(2); // ➞ 4
