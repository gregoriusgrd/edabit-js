function addIndexes(arr) {
  return arr.map((n, i) => n + i);
}

addIndexes([0, 0, 0, 0, 0]); // ➞ [0, 1, 2, 3, 4]
addIndexes([1, 2, 3, 4, 5]); // ➞ [1, 3, 5, 7, 9]
addIndexes([5, 4, 3, 2, 1]); // ➞ [5, 5, 5, 5, 5]
