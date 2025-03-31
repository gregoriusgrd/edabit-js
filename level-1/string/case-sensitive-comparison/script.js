function match(s1, s2) {
  if (s1.toLowerCase() === s2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

match("hello", "hELLo"); // ➞ true
match("motive", "emotive"); // ➞ false
match("venom", "VENOM"); // ➞ true

// minimalist (using ternary)
/*
const match = (s1, s2) => s1.toLowerCase() === s2.toLowerCase() ? true : false
*/
