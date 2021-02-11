'use strict';

const Page = require( 'wdio-mediawiki/Page' );

class SpecialRandomPage extends Page {
	get helpPanel() { return $( '#mw-ge-help-panel-cta-button' ); }

	openForEditing( wiki ) {
		browser.url( `https://${wiki}/wiki/Special:Random?action=edit` );
	}

}

module.exports = new SpecialRandomPage();
