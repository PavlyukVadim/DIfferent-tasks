function solution(roman){
	

	return roman.split('').reduce((sum, current, i, arr) => {
		switch(current) {
			case 'I': return sum + 1;
			case 'V': { if ( arr[i - 1] == 'I') { 
							return sum + 3; }
							else return sum + 5;
						}
			case 'X': return sum + 10;
			case 'L': return sum + 50;
			case 'C': return sum + 100;
			case 'D': return sum + 500;
			case 'M': return sum + 1000;
		};
	}, 0);
	/*-----------
	M 1000
	D 500
	C 100
	L 50
	X 10
	V 5
	I 1
	-----------*/
}

console.log( solution("IV") );