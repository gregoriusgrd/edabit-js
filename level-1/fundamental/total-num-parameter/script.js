function numberArgs(...arg) {
  return arg.length;
}

numberArgs("a", "b", "c"); // ➞ 3
numberArgs(10, 20, 30, 40, 50); // ➞ 5
