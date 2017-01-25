function removeZeros(array) {
  
  var l = array.length,
      countZero = 0;
  for (var i = 0; i < l; i++) {
     if(!array[i] ||  array[i] == "0") {
       countZero++;
     }
  }    
      
      
  for (var i = 0; i < l - countZero; i++) {
    if(array[i] === 0 ||  array[i] === "0") {
      var value = array[i];
      for(var j = i; j < l - 1; j++) {
        array[j] = array[j + 1];
      }
      array[l - 1] = value; 
      i--;
      console.log(array)
    }
  }
  
  return array;
}
