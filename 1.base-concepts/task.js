"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let descriminant = Math.pow(b,2) - 4*a*c;
  if (descriminant>0){
  let root1 = (-b + Math.sqrt(descriminant) )/(2*a);
  let root2 =  (-b - Math.sqrt(descriminant) )/(2*a);
  arr.push(root1,root2);
  return arr;
  }

  if (descriminant === 0){
    let root0 = -b/(2*a);
    arr.push(root0);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentage = parseInt(percent) / 100 / 12;
	let contrAmount = parseInt(contribution);
	let amountNumber = parseInt(amount);
	if (isNaN(percentage) || percentage < 0) {
		return `false`;
	}
  let s = amountNumber - contrAmount;
  let n = countMonths;
  let pay = s * (percentage + percentage / (((1 + percentage) ** n) - 1));
  let totalAmount = (pay * n).toFixed(2);
  console.log(totalAmount);
  return +totalAmount;
}