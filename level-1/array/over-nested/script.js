function deNest(arr) {
  while (Array.isArray(arr)) {
    arr = arr[0];
  }
  return arr;
}

deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]); // ➞ "edabit"
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])); // 3

// using arr.flat()
/*
function deNest(arr) {
	return arr.flat(Infinity)[0];
}
*/
