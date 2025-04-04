// using pop and shift
function getFillings(sandwich) {
  sandwich.pop();
  sandwich.shift();
  return sandwich;
}

getFillings(["bread", "ham", "cheese", "ham", "bread"]); // ➞ ["ham", "cheese", "ham"]
getFillings(["bread", "sausage", "tomato", "bread"]); // ➞ ["sausage", "tomato"]
getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]); // ➞ ["lettuce", "bacon", "tomato"]

// using slice
/*
const getFillings = sandwich => sandwich.slice(1, -1);
*/
