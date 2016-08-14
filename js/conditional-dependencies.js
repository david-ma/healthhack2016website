if(!(Modernizr.template && Modernizr.htmlimports && 'registerElement' in document)) {
	document.write('<script src="/bower_components\/webcomponentsjs\/webcomponents-lite.min.js"></script>')
}

if(!window.fetch) {
	document.write('<script src="/bower_components/fetch/fetch.js"></script>')
}
