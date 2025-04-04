// using pop and shift
function getFillings(sandwich) {
  let pop = sandwich.pop();
  let shift = sandwich.shift();
  return sandwich;
}

getFillings(["bread", "ham", "cheese", "ham", "bread"]); // ➞ ["ham", "cheese", "ham"]
getFillings(["bread", "sausage", "tomato", "bread"]); // ➞ ["sausage", "tomato"]
getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]); // ➞ ["lettuce", "bacon", "tomato"]
