// basic

function preventDistractions(str) {
  if (
    str.includes("anime") ||
    str.includes("meme") ||
    str.includes("vines") ||
    str.includes("roasts") ||
    str.includes("Danny DeVito")
  ) {
    return "NO!";
  } else {
    return "Safe watching!";
  }
}

preventDistractions("Hot pictures of Danny DeVito"); // ➞ "NO!"
preventDistractions("How to ace BC Calculus in 5 Easy Steps"); // ➞ "Safe watching!"

// arrow function + regex + ternary
/*
const preventDistractions = str => /anime|meme|vine|roasts|Danny DeVito/.test(str) ? 'NO!' : 'Safe watching!';
*/

// array + ternary
/*
function preventDistractions(str) {
	let arr = ["anime", "meme", "vine", "roasts", "Danny DeVito"];
	return arr.some(x => str.includes(x)) ? "NO!" : "Safe watching!";
}
*/
