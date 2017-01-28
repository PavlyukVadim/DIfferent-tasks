function isValidIP(str) {
	var arr = str.split('.');
	if(arr.length != 4) { return false; }
	return !arr.some((i) => {
		if( isNaN(i) || i - '' > 255) return true;
	});
	return true;
}