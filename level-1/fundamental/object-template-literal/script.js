/*
tokyo({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
*/

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  })
);
