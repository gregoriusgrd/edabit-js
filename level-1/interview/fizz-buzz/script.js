function FizzBuzz(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else {
    return num.toString();
  }
}

FizzBuzz(3); // ➞ "Fizz"
FizzBuzz(5); // ➞ "Buzz"
FizzBuzz(15); // ➞ "FizzBuzz"
FizzBuzz(4); // ➞ "4"

// ternary
/*
function FizzBuzz(num) {
	return num % 15 === 0 ? 'FizzBuzz' 
	     : num % 5 === 0 ? 'Buzz' 
	     : num % 3 === 0 ? 'Fizz' 
	     : String(num);
}
*/

// shortest
/*
function FizzBuzz(num) {
	return (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;
}
*/
