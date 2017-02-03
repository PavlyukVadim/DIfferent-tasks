"use strict";

let getY = (x) =>  2 * x + 1;
let getZ = (x) =>  3 * x + 1;


function dblLinear(n) {
    let arr = [1];
    let yValue, zValue;
    let y = 0, z = 0;

    while (arr.length <= n ) {
		yValue = getY( arr[y] );
		zValue = getZ( arr[z] );
		if(yValue < zValue){
			if(arr[arr.length-1] === yValue){
				y++;
				continue;
			}
			arr.push(yValue);
			y++;
        } else {
        	if(arr[arr.length-1] === zValue) {
               z++;
               continue;
          	}
	        arr.push(zValue);
	        z++;
        }
    }
    return arr[n];
}

console.log(dblLinear(10))