function wordLengths(arr) {
  return arr.map((word) => word.length);
}

wordLengths(["hello", "world"]); // ➞ [5, 5]

wordLengths(["Halloween", "Thanksgiving", "Christmas"]); // ➞ [9, 12, 9]
