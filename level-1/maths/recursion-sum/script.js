function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

sum(5); // ➞ 15
// 1 + 2 + 3 + 4 + 5 = 15

// Minimalist
/*
const sum = n => n === 1 ? n : n + sum(n-1);
*/
