"use strict";

var calc = function (expression) {
    let obj = {};
    obj.s =  '(' + expression + ')';
    let operands = [], functions = [];

    let token;
    let prevToken = 'Ы';


    do {
    	token = getToken(obj);
    	console.log(token);
    } while (token != undefined);
  
};

function getToken(obj) {

    while(obj.s[0] == ' ') {
    	obj.s = obj.s.substring(1, obj.s.length);
    }

    if (!obj.s.length) {
        return undefined;
    } else if (!isNaN(obj.s[0])) {
		let value = parseFloat(obj.s);
		obj.s = obj.s.substring((value + '').length, obj.s.length);  
    	return value;
    }
    let operation = obj.s[0]; 
    obj.s = obj.s.substring(1, obj.s.length);
    return operation;
}

calc('500.55555+ 60 / 22.5564 + 0');