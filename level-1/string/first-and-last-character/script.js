function firstLast(name) {
  return name[0] + name.slice(-1);
}

/*
firstLast("ganesh") ➞ "gh"
firstLast("kali") ➞ "ki"
firstLast("shiva") ➞ "sa"
*/

// using length - 1
/*
const firstLast = name => name[0] + name[name.length - 1];
*/

// arrow function
/*
const firstLast = n => n[0] + n.slice(-1);
*/
