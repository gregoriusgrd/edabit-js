function hasSameBread(arr1, arr2) {
  return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
}

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
); // ➞ true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
); // ➞ false

hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]); // ➞ false
