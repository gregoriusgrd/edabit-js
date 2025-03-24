function arrayValuesTypes(arr) {
  return arr.map((n) => typeof n);
}

arrayValuesTypes([1, 2, "null", []]);
// ➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
