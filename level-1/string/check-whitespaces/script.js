const hasSpaces = (str) => (str.includes(" ") ? true : false);

console.log(hasSpaces("hello")); // ➞ false
console.log(hasSpaces("hello, world")); // ➞ true
