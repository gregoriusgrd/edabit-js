// using pop and shift
function getFillings(sandwich) {
  let pop = sandwich.pop();
  let shift = sandwich.shift();
  return sandwich;
}

console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));
