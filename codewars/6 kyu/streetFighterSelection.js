function streetFighterSelection(fighters, position, moves){
  
  var resFighters = [];
  
  moves.forEach(function(m) {
    switch(m) {
      case 'up' : { position[0] -= 1; break;}
      case 'left' : { position[1] -= 1; break;}
      case 'right' : { position[1] += 1; break;}
      case 'down' : { position[0] += 1; break;}
      
    };
    takeFighters(position);
  });
  
  function takeFighters(position) {
    if(position[0] > fighters.length - 1) position[0] = fighters.length - 1;
    if(position[0] < 0) position[0] = 0;
    if(position[1] < 0) position[1] = fighters[0].length - 1;
    if(position[1] > fighters[0].length - 1) position[1] = 0;
    
    resFighters.push(fighters[position[0]][position[1]]);
  }
  
  return resFighters;
}
