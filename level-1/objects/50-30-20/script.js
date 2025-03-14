function fiftyThirtyTwenty(ati) {
  let Needs = 0.5 * ati;
  let Wants = 0.3 * ati;
  let Savings = 0.2 * ati;
  let obj = { Needs, Wants, Savings };
  return obj;
}

fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

//Minimalist
/*
function fiftyThirtyTwenty(ati) {
	return {"Needs": ati * 0.5, "Wants": ati * 0.3, "Savings": ati * 0.2}
}
*/
