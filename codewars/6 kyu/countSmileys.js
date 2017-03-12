'use strict';

//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((sum, face) => {
  	if(/[:;][-~]?[)D]/.test(face)) {
  		console.log(face);
  	} return sum + 1;
  	return sum;
  }, 0);
}

console.log(countSmileys([':D',':~)',';~D',':)']));
