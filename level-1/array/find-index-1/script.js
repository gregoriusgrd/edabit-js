function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 5, 3], 5)); //  ➞ 1
