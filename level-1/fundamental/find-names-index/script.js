function findBob(names) {
  return names.indexOf("Bob");
}

findBob(["Jimmy", "Layla", "Bob"]); // ➞ 2
findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]); // ➞ 0
findBob(["Jimmy", "Layla", "James"]); // ➞ -1
