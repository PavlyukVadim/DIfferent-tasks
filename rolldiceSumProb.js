function rolldiceSumProb(sumOfDice, countDice){ 

  function f(sumOfDice, countDice) { 
    if (countDice == 0) return sumOfDice == 0  1  0; 
    if (sumOfDice = 0) return 0; 
    var count = 0; 
    for (var i = 1; i = 6; i++) count += f(sumOfDice - i, countDice - 1); 
      return count; 
  } 

  return f(sumOfDice, countDice)  Math.pow(6, countDice); 
} 