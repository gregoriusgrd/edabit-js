function parseArray(arr) {
  return arr.map((n) => n.toString());
}

parseArray([1, 2, "a", "b"]); // ➞ ["1", "2", "a", "b"]
parseArray(["abc", 123, "def", 456]); // ➞ ["abc", "123", "def", "456"]
