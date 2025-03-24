// switch case ver

function relationToLuke(name) {
  let relation;
  switch (name) {
    case "Darth Vader":
      relation = `Luke, I am your father.`;
      break;
    case "Leia":
      relation = "Luke, I am your sister.";
      break;
    case "Han":
      relation = "Luke, I am your brother in law.";
      break;
    case "R2D2":
      relation = "Luke, I am your droid.";
      break;
    default:
      relation = null;
  }
  return relation;
}

console.log(relationToLuke("Darth Vader"));

// using object
/*
function relationToLuke(name) {
	const rels = {
		"Darth Vader": "father",
		"Leia": "sister",
		"Han": "brother in law",
		"R2D2": "droid"
	}
	return `Luke I am your ${rels[name]}.`
}
*/

// using map()
/*
const rels = new Map([
	['Darth Vader', 'father'],
	['Leia', 'sister'],
	['Han', 'brother in law'],
	['R2D2', 'droid']
]);

const relationToLuke = name => `Luke, I am your ${rels.get(name)}.`;
*/
