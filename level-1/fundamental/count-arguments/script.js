function numArgs(...args) {
  let count = 0;
  for (const arg of args) {
    count++;
  }
  return count;
}

numArgs(); // ➞ 0
numArgs("foo"); // ➞ 1
numArgs("foo", "bar"); // ➞ 2

// minimalist
/*
function numArgs(...args) {
	return args.length;
}
*/
