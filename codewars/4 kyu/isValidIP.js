function isValidIP(str) {
	var arr = str.split('.');
	if(arr.length != 4) { return false; }
	return !arr.some((i) => {
		if( isNaN(i) || i - '' > 255) return true;
	});
	return true;
}

/*
function isValidIP(str) {
  return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){4}$/.test(str+'.');
}
*/
