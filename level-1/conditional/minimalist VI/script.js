// basic
/*
function areTrue(a, b) {
	if (a == true) {
		if (b == true) {
			return "both";
		}
		else {
			return "first";
		}
	}
	else if (b = true) {
		return "second";
	}
	else {
		return "neither";
	}
}
*/

// minimalist
const areTrue = (a, b) =>
  a === true && b === true
    ? "both"
    : a === true
    ? "first"
    : b === true
    ? "second"
    : "neither";
