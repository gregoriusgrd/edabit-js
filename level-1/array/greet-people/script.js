function greetPeople(names) {
  return names.map((name) => `Hello ${name}`).join(", ");
}

console.log(greetPeople(["Joe", "Alice"])); // Hello Joe, Hello Alice
