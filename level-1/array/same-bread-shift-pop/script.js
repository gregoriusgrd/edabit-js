function hasSameBread(arr1, arr2) {
  return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
}
