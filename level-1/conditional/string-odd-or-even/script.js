function oddOrEven(s) {
  if (s.length % 2 === 0) {
    return true;
  }
  return false;
}

console.log(oddOrEven("apples")); // ➞ true
console.log(oddOrEven("pears")); // ➞ false
