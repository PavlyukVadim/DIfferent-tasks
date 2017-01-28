function pascalsTriangle(n) {
  var result = [], flatArray = [];
  result[0] = [];
  result[0][0] = 1;
  
  for (var i = 1; i < n; i++) {
    result.push([]);
    result[result.length - 1].push(1);
    
    for(var j = 0; j < result[result.length - 2].length - 1; j++) {
        result[result.length - 1].push(result[result.length - 2][j] + result[result.length - 2][j + 1]);
    }
    
    result[result.length - 1].push(1);
  }
  
  result.map((arr) => { arr.map((el) => flatArray.push(el)); });
  return flatArray;
}
