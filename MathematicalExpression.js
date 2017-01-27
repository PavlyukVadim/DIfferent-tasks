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

     if (!isNaN(token)) {
            operands.push(+token);
        } else {
            
            if ( token == ')' ) {
                while (functions.length > 0 && functions[functions.length - 1] != '(') {
                    popFunction(operands, functions);
                }

                functions.pop(); // Удаляем саму скобку "("
            } else {
                
                while (canPop(token, functions)) {
                    popFunction(operands, functions); 
                }

                functions.push(token); // Кидаем новую операцию в стек
            }
        }
        prevToken = token;
    }
    while (token != undefined);
     
    return operands.pop();
  	
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

function popFunction(operands, functions) {
    let B = operands.pop();
    let A = operands.pop();
    switch ( functions.pop() ) {
        case '+': operands.push(A + B);
            break;
        case '-': operands.push(A - B);
            break;
        case '*': operands.push(A * B);
            break;
        case '/': operands.push(A / B);
            break;
    }
}

function canPop(op1, functions) {
    if (functions.length == 0) {
        return false;
    }
    let p1 = getPriority(op1);
    let p2 = getPriority(functions[functions.length - 1]);

    return p1 >= 0 && p2 >= 0 && p1 >= p2;
}

function getPriority(op) {
    switch (op) {
        case '(': return -1; // не выталкивает сам и не дает вытолкнуть себя другим
        case '*': case '/': return 1;
        case '+': case '-': return 2;
        default:
            // Error;
    }
}