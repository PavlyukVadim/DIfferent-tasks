"use strict";

function removeNb (n) {
	let sum = (1 + n) * (n / 2);
	let result = [];

	var i;
	for (i = 1; i <= n; i++) {
		var j = (sum - i) / (i + 1);
		if( j == Math.floor(j) && j <= n) {
			result.push([i, j]);
		}
	}
	return result;
}

console.time('time');
console.log( removeNb(1000003) );
console.timeEnd('time');