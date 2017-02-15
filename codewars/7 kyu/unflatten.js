"use strict";


function unflatten (flatArray) {
	let unflattenArray = [];
	for(let i = 0; i < flatArray.length; i++) {
		let itemValue = flatArray[i];
		if (itemValue < 3) {
			unflattenArray.push(itemValue);
		} 
		if (itemValue > 2) {
			unflattenArray.push( flatArray.slice(i, i + itemValue) );
			i += itemValue - 1;
		}
	}

	return unflattenArray;
}

console.log( unflatten([1,4,5,2,1,2,4,5,2,6,2,3]) );