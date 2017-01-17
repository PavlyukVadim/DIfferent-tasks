function minutesToMidnight(d){
  var d2 = new Date(new Date().setHours(24,0,0,0,0,0));
  var diff = Math.round((d2 - d) / 60000);
  if(diff == 1) return diff + " minute";
  return diff + " minutes"; 
}