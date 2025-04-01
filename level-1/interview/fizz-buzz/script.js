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
