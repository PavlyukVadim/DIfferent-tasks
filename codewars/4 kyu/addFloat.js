function add(a, b) {
	if (checkValidation(a) && checkValidation(b)) {
		a = String(a);
		b = String(b);

		[a, b] = validStrings(a, b);
		let sum = addString(a.split(''), b.split('')); 
		return sum;
	}
	return NaN;
}

function checkValidation(n) {
	n = Number(n);
	return typeof n === 'number' && !isNaN(n);
}

function countNumberOfDigitsAfterDot(str) {
	let strIndexOfDot = str.indexOf('.');
	if (strIndexOfDot === -1) {
		return 0;
	}
	return str.length - strIndexOfDot - 1;  
}

function validStrings(a, b) {
	let aNumberOfDigitsAfterDot = countNumberOfDigitsAfterDot(a);
	let bNumberOfDigitsAfterDot = countNumberOfDigitsAfterDot(b);

	let diff = bNumberOfDigitsAfterDot - aNumberOfDigitsAfterDot;
	if (diff > 0) {
		if(!aNumberOfDigitsAfterDot) {
			a += '.';
		}
		a += '0'.repeat(diff);
	} else if (diff < 0) {
		if(!bNumberOfDigitsAfterDot) {
			b += '.';
		}
		b += '0'.repeat(-diff);
	}

	let alength = a.length;
	let blength = b.length;

	if (alength > blength) {
		b = '0'.repeat(alength - blength) + b;
 	} else if (blength > alength) {
 		a = '0'.repeat(blength - alength) + a;
 	}

	return [a, b];
}

function addString(a, b) {
	let sum = [];
	let i = a.length - 1;
	let rest = 0;

	while (i >= 0) {
		
		if (a[i] === '.') {
			sum.unshift('.');
			i--;
		}

		let sum2digits = Number(a[i]) + Number(b[i]);
		if (sum2digits >= 10) {
			sum.unshift(sum2digits % 10);
			if(i >= 1) {
				a[i - 1]++;	
			} else rest = 1;
		} else {
			sum.unshift(sum2digits);
		}
		i--;
	}

	if (rest) {
		sum.unshift(rest);
	}

	return sum.join('');
}

console.log(add(923, '329'));
console.log(add("1234567890.0987654321", "8765432109.9012345678"));
console.log(add(100.54656465, 10));
console.log(add(0.1, 0.0001));
