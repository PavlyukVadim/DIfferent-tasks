'use strict';

function findOdd(A) {
  A = A.sort((a, b) => a - b);
  let i = 0;
  for (; i < A.length; i++) {
  	if(!((A.lastIndexOf(A[i]) - A.indexOf(A[i])) % 2)) return A[i];
  	i = A.lastIndexOf(A[i]);
  }
  return A;
}

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
