var counter = 0;
var text = "ajhdgjk ajkc0 fd kha0 kjashdj as00sd\nekjfs 0";

//$("*").text( function(index, text) ) {
text.split("").forEach(function(current) {
	if(current == '0') counter++;
});
console.log(counter);
//}