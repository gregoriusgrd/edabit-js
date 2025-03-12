function removeNull(arr) {
  return arr.filter((arr) => arr !== null);
}

console.log(removeNull(["a", null, "b", null])); // ➞ ["a", "b"]
