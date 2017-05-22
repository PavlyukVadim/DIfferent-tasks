'use strict';

const pieChart = (json) => {
	const obj = JSON.parse(json);
	let totalSum = 0;
	for (let key in obj) {
		totalSum += +obj[key];
	}
	const coef = 360 / totalSum;
	for (let key in obj) {
		obj[key] = Math.round((obj[key] * coef) * 100) / 100;
	}
  console.log(obj);
  return JSON.stringify(obj);
}

pieChart('{"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}');
