function inArray(array1,array2){
  return array1.filter((str) => { 
    if(~array2.join(' ').indexOf(str)) return str;
  }).sort();
}
