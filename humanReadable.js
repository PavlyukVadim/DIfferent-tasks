function humanReadable(seconds) {
  var date = new Date(seconds);
  var timeArr = [];
  var result = [0, 0, 0];
  
  timeArr[2] = 1;
  timeArr[1] = 60 * timeArr[2]; // minute
  timeArr[0] = 60 * timeArr[1]; // hour
    
  for (var i = 0; i < 3; i++) {
    if(seconds >= timeArr[i]) {
     var n = Math.floor(seconds / timeArr[i]);
     seconds -= n * timeArr[i];
     result[i] = n;
    } 
  }
  result = result.map((el) => {
    if (!el) {
      return '00';
    } else if(el < 10) {
      return '0' + el;
    } else {
      return el;
    }
  });
  return  result.join(':');
}
