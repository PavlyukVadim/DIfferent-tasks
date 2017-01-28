function formatDuration (seconds) {
  var date = new Date(seconds);
  var timeArr = [];
  var timeType = ['year', 'day', 'hour', 'minute', 'second'];
  var result = [];
  
  timeArr[4] = 1;
  timeArr[3] = 60 * timeArr[4]; // minute
  timeArr[2] = 60 * timeArr[3]; // hour
  timeArr[1] = 24 * timeArr[2]; // day
  timeArr[0] = 365 * timeArr[1]; // year
    
  for (var i = 0; i < 5; i++) {
    if(seconds >= timeArr[i]) {
     var n = Math.floor(seconds / timeArr[i]);
     seconds -= n * timeArr[i];
     result.push(n + ' ' + timeType[i]);
     if(n > 1) result[result.length - 1] += 's';
    } 
  }
  
  if(result.length > 1) {
    var last = result.pop();
    result = result.join(', ') + ' and ' + last
  } else { result = result[0]; }
  return  result || 'now';
}
