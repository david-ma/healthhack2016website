if ('registerElement' in document && 'createShadowRoot' in HTMLElement.prototype && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
// We're using a browser with native WC support!
} else {
	document.write('<script src="https://bowercdn.net/c/es6-shim-0.35.1/es6-shim.min.js"></script>');
	document.write('<script src="https://bowercdn.net/c/webcomponentsjs-0.7.22/webcomponents-lite.min.js"><\/script>');

}

if(!window.fetch) {
	document.write('<script src="https://bowercdn.net/c/fetch-1.0.0/fetch.js"></script>');
}
