"use strict";


Object.prototype.random = function() {
	let objValues = [];
    getValuesFromObject(this, objValues);
    let randomIndex = Math.floor( Math.random() * objValues.length );
    return objValues[randomIndex];
};

Object.prototype.toRandomArray = function() {
    let objValues = [];
    getValuesFromObject(this, objValues);

    let randomArray = [];
    let existIndexes = [];
    let currentIndex = 0;

    while (currentIndex < objValues.length) {
        let randomIndex = Math.floor( Math.random() * objValues.length );
        if (!~existIndexes.indexOf(randomIndex)) {
            existIndexes.push(randomIndex);
            randomArray[currentIndex] = objValues[randomIndex];
            currentIndex++;
        }
    }

    return randomArray;

};

function getValuesFromObject(obj, arr) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            getValuesFromObject(obj[key], arr);   
        } else {
            if (typeof obj[key] !== "function") {
                arr.push( obj[key] );
            }
        }
    }
}


var obj = {
    a: 1,
    b: {
        x: 2,
        y: 3
    },
    c: {
        z: {
            q: 4
        }
    }
};


//console.log( obj.random() );
console.log( obj.toRandomArray() );
