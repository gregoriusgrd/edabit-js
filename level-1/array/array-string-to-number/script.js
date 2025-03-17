function toNumberArray(arr) {
  return arr.map(Number);
}

toNumberArray(["9.4", "4.2"]); // ➞ [9.4, 4.2]
toNumberArray(["91", "44"]); // ➞ [91, 44]
