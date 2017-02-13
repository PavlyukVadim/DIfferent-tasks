var Router = function() {
	this.urls = []; // { url, method, callback }
}

Router.prototype.bind = function(url, method, callback) {
	this.urls.push({
		url,
		method,
		callback
	});
}

Router.prototype.runRequest = function (url, method) {
	var i;
	var validRouters = this.urls.filter((router) => {
		return (router.url == url && router.method == method);
	});
	
	if( !validRouters.length ) return 'Error 404: Not Found';
	return validRouters[validRouters.length - 1].callback();
	
}


//var router = new Router;
//router.bind('/hello', 'GET', function(){ return 'hello world'; });
//console.log( router.runRequest('/helo', 'GET') ); // returns 'hello world';
