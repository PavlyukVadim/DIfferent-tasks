'use strict';

function Funnel() {
	this.data = [Array(1), Array(2), Array(3), Array(4), Array(5)];
	this.data.forEach((level) => {
		let i = 0;
		for (; i < level.length; i++) {
			level[i] = ' ';	
		} 
	});
	this.capacity = 0;
}

Funnel.prototype.toString = function() {
	return  this.data.map(level => ' '.repeat(5 - level.length) + '\\' + level.join(' ') + '/').reverse().join('\n');
};

Funnel.prototype.fill = function(...values) {
	let i = 0;
	for (; i < values.length; i++) {
		fillValue.call(this, values[i]);
	}
};

function fillValue(value) {
	if (this.capacity >= 15) return;
	let i = 0;
	let filled = false;
	for (; i < 5; i++) {
		let level = this.data[i];
		let j = 0;
		for (; j < level.length; j++) {
			if(level[j] === ' ') {
				level[j] = value;
				filled = true;
				this.capacity += 1;
				break;
			};	
		}
		if (filled) break;
	}
};

Funnel.prototype.drip = function() {
	this.driped = this.data[0][0];
	if (!this.capacity) return null;
	recursiveDrip(this.data, 0, 0);
	this.capacity --;
	return this.driped;
};

function recursiveDrip(data, indexOfLevel, indexOfValue) {
	if (indexOfLevel == 4) return;
	if (data[indexOfLevel].every((item => item === ' '))) return;
	data[indexOfLevel][indexOfValue] = ' ';
	let weightLeft = findWeight(data, indexOfLevel + 1, indexOfValue);
	let weightRight = findWeight(data, indexOfLevel + 1, indexOfValue + 1);
	if (weightLeft >= weightRight) {
		data[indexOfLevel][indexOfValue] = data[indexOfLevel + 1][indexOfValue];
		data[indexOfLevel + 1][indexOfValue] = ' ';
		recursiveDrip(data, indexOfLevel + 1, indexOfValue);
	} else {
		data[indexOfLevel][indexOfValue] = data[indexOfLevel + 1][indexOfValue + 1];
		data[indexOfLevel + 1][indexOfValue + 1] = ' ';
		recursiveDrip(data, indexOfLevel + 1, indexOfValue + 1);
	}
}

function findWeight(data, indexOfLevel, indexOfValue) {
	let weight = 0;
	if (data[indexOfLevel][indexOfValue] !== ' ') {
		weight += 1;
	}
	let i = indexOfLevel + 1;
	for (; i < 5; i++) {
		let level = data[i];
		let j = indexOfValue;
		for (; j < level.length - (data[indexOfLevel].length - indexOfValue - 1); j++) {	
			if (level[j] !== ' ') {
				weight += 1;
			}
		}
	}
	return weight;
}

let funnel = new Funnel();

funnel.fill(5,6,8,3,4,7),
funnel.drip();
funnel.drip();
let v = funnel.drip();
console.log(v);
console.log(funnel.toString());
