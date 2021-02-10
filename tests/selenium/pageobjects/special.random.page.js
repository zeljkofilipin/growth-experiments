'use strict';

const Page = require( 'wdio-mediawiki/Page' );

class SpecialRandomPage extends Page {
	get helpPanel() { return $( '#wpName2' ); }

	open() {
		super.openTitle( 'Special:Random' );
	}

}

module.exports = new SpecialRandomPage();
