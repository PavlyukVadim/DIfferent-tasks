"use strict";

function group(arr) {
	let map = new Map();
	arr.forEach((item) => {
		if ( !map.get(item) ) {
			map.set(item, arr.indexOf(item));
		}
	});

	let result = [];
	arr.forEach((item) => {
		let index = map.get(item);
		if (result[index] === undefined) {
			result[index] = [];
		}
		result[index].push(item);
	});

	//map.set('1', 'str1');
	return result.filter((item) => item);
}

console.log( group([3, 2, 6, 2, 1, 3]) );