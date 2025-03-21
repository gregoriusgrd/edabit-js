function formatDate(date) {
  let split = date.split("/");
  let reverse = split.reverse();
  let join = reverse.join("");
  return join;
}

console.log(formatDate("11/12/2019")); //  ➞ "20191211"

// minimalist version
/*
function formatDate(date) {
	return date.split("/").reverse().join("")
}
*/
