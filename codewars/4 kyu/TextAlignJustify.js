"use strict";

function textAlign(str, n) {
	let words = str.split(' ');
	let result = '';
	let currentL = 0;
	let currentArr = [];
	
	for (let i = 0, countW = words.length; i < countW; i++) {
		let word = words[i];
		let wordL = word.length;
		if (currentL + wordL + 1 <= n) {
			currentArr.push(word + ' ');
			currentL += wordL + 1;
			if (i == words.length - 1) result += currentArr.join('');
		} else if (currentL + wordL <= n) {
			currentArr.push(word);
			currentL += wordL;
			if (i == words.length - 1) result += currentArr.join('');
		} else {
		 	currentArr.push(currentArr.pop().slice(0, -1));
			let countSpacesInGap = n - currentL;
			let countGaps = currentArr.length - 1;
			let numberWord = 0;
			
			while(countSpacesInGap > 0) {
				currentArr[numberWord] += ' ';
				countSpacesInGap--;
				numberWord++;
				if(numberWord >= currentArr.length - 1) numberWord = 0;
			}
			result += currentArr.join('') + '\n';
			currentArr.length = 0;
			currentL = 0;
			i--;
		}
	};
	return result;
}

console.log( textAlign("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsum velit amet dignissimos quam. Perferendis qui nemo, dolor itaque, atque ad voluptas quisquam eaque sint illum repellendus cumque. Obcaecati praesentium assumenda modi, harum eaque asperiores laboriosam vitae tempore reprehenderit aliquam, ullam omnis atque eius quasi itaque perspiciatis tempora quam sequi! lorem", 30) );