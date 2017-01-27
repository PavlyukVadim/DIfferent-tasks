function solution(roman){
	
	var number = '';
	var numbers = ['M', 'CM',  'D', 'C', 'XC', 'L', 'X', 'V', 'I'];
	var values = [1000, 900, 500, 100, 90, 50, 10, 5, 1]
	
	
		for (var i = 0; i < 9; i++) {
			if(roman == 4) {
				roman -= 4;
				number += 'IV';
				i--;
				if(!roman) break;
			} else if(values[i] <= roman) {
				roman -= values[i];
				number += numbers[i];
				i--;
				if(!roman) break;
			}
		}
	

	return number;
}

console.log( solution(2008) );