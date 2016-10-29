function navigate(numberOfIntersections, roads, start, finish) {
  return Belman(numberOfIntersections, roads, start, finish)
}

function Belman(amount_vertex, roads, V1, V2) {
        
  var distanse = [], path = [], array_connect = [], way = [];
  
  for (var i = 0; i < roads.length; i++) {
    array_connect[i] = [];
    array_connect[i][0] = roads[i].from  + 1;
    array_connect[i][1] = roads[i].to + 1;
    array_connect[i][2] = roads[i].drivingTime;
  }        
        
  distanse[V1] = 0;
  for(var i = 0; i < amount_vertex; i++){
    if(i != V1) distanse[i] = 1000;
    path[i] = 0; 
  }
  
  for(var o = 0; o < array_connect.length + 1; o++){
      for(var j = 0; j < amount_vertex; j++){
          for(var i = 0; i < array_connect.length; i++){
              if(array_connect[i][0] == j + 1){
                  if(distanse[j] + array_connect[i][2] < distanse[array_connect[i][1] - 1]){
                      distanse[array_connect[i][1] - 1] = distanse[j] + array_connect[i][2];
                      path[array_connect[i][1] - 1] = j;
                  }
              }
          }
      } 
  }
  
  var k = path[V2];
  
  for(var i = 0; i < path.length; i++){
      if(i != V1) path[i]++;
  }

  way.push(V2 + 1);
  var finish_path = V2;
  for(var i = 0; i < path.length; i++){
      k = path[finish_path];
      way.push(k);
      finish_path = k - 1;
      if(k - 1 == V1){
          break;
      }
  }

  var start = V1 + 1;
  var finish = V2 + 1;
  way = way.reverse().map((el) => el - 1).filter((el) => el >= 0);;
  
  console.log(way);
  
  if(way.length == 2 ) return null;
  
  return way;
}
