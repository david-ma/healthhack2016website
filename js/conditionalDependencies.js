if(!Modernizr.fetch) {
	document.write('<script src="bower_components\/fetch\/fetch.js"></script>')
}
if(!(Modernizr.template && Modernizr.htmlimports && 'registerElement' in document)) {
	document.write('<script src="bower_components\/webcomponentsjs\/webcomponents.min.js"></script>')
}