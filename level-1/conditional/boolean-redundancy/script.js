// Basic
/*
function parity(n) {
	let remainder = Boolean(n % 2)
	if(remainder === false) {
		return "even"
	}
	if(remainder === true) {
		return "odd"
	}
}
*/

// Minimalist
const parity = (n) => (n % 2 === 0 ? "even" : "odd");
