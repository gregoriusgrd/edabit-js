function operate(num1, num2, operator) {
  return eval(`${num1} ${operator} ${num2}`);
}

console.log(operate(2, 1, "*")); // ➞ 2 * 1 = 2
console.log(operate(5, 3, "+")); // ➞ 5 + 3 = 8
console.log(operate(10, 2, "/")); // ➞ 10 / 2 = 5
console.log(operate(7, 4, "-")); // ➞ 7 - 4 = 3
