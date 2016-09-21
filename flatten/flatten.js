function flatten(){
  
  newArray = [];
  var array = arguments[0];
  var i = 0;  
  
  if(! (array instanceof Array)) {
    throw Error('not array');
  };
  
  for (l = array.length; i < l; i++) {
    convert( array[i] );
  }
  return newArray;
    
}

function convert( a ) {
  if (! (a instanceof Array)) {
    newArray.push(a);
  }
  else{
    a.forEach(function(element){
      convert(element);
    });  
  }    
}

console.log(flatten([1, [2, 3], [[4], [5, 6]]]));
// => [1, 2, 3, 4, 5, 6];