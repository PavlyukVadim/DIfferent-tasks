"use strict";

function getPercentage (sent, limit) {
	limit = limit || 1000;
	if (!sent) return 'No e-mails sent';
	if ( sent >= limit) return 'Daily limit is reached'; 
	let percentage = Math.floor( (sent / limit) * 100); 
	return `${percentage}%`;
}

console.log(getPercentage(101, 1000));