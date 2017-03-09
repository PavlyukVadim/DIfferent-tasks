'use strict';

function Funnel() {
	this.data = [Array(1), Array(2), Array(3), Array(4), Array(5)];
	this.data.forEach((level) => {
		let i = 0;
		for (; i < level.length; i++) {
			level[i] = ' ';	
		} 
	});
}

Funnel.prototype.toString = function() {
	//
	return  this.data.map(level => ' '.repeat(5 - level.length) + '\\' + level.join(' ') + '/' + ' '.repeat(5 - level.length)).reverse().join('\n');
	//return '\\' + ' ' + '/'
};

Funnel.prototype.fill = function() {

};

Funnel.prototype.drip = function() {

};

let funnel = new Funnel();
console.log(funnel.toString());
