function arrBetween(num1, num2, arr) {
  return arr.filter((element) => num1 < element && num2 > element);
}

arrBetween(3, 8, [1, 5, 95, 0, 4, 7]); // ➞ [5, 4, 7]
arrBetween(1, 10, [1, 10, 25, 8, 11, 6]); // ➞ [8, 6]
