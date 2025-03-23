function returnOnlyInteger(arr) {
  return arr.filter(Number.isInteger);
}

returnOnlyInteger([9, 2, "space", "car", "lion", 16]); // ➞ [9, 2, 16]
returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]); // ➞ [81, 123]
