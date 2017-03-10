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
	return  this.data.map(level => ' '.repeat(5 - level.length) + '\\' + level.join(' ') + '/' + ' '.repeat(5 - level.length)).reverse().join('\n');
};

Funnel.prototype.fill = function(value) {
	if (this.capacity >= 14) return;
	let i = 0;
	let filled = false;
	for (; i < 5; i++) {
		let level = this.data[i];
		let j = 0;
		for (; j < level.length; j++) {
			if(level[j] == ' ') {
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

};

let funnel = new Funnel();
funnel.fill(1);
funnel.fill(2);
funnel.fill(3);
funnel.fill(4);
funnel.fill(5);
funnel.fill(6);
funnel.fill(7);
funnel.fill(8);
funnel.fill(9);


console.log(funnel.toString());
