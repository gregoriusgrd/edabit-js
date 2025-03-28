function modifyLast(str, n) {
  return str.slice(0, -1) + str[str.length - 1].repeat(n);
}

modifyLast("Hello", 3); // ➞ "Hellooo"
modifyLast("hey", 6); // ➞ "heyyyyyy"

// simpler ver
/* 
function modifyLast(str, n) {
	return str + str.slice(-1).repeat(n - 1)
}
*/
