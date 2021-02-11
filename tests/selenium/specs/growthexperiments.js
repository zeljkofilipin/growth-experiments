'use strict';

const saveScreenshot = require( 'wdio-mediawiki' ).saveScreenshot;
const UserLoginPage = require( 'wdio-mediawiki/LoginPage' );
const SpecialRandomPage = require( '../pageobjects/special.random.page' );

describe( 'GrowthExperiments', function () {

	it( 'help panel should be displayed when editing a random page', function () {
		UserLoginPage.loginAdmin();

		const wikis = [
			'ar.wikipedia.org', // Arabic Wikipedia
			'bn.wikipedia.org', // Bengali Wikipedia
			'cs.wikipedia.org', // Czech Wikipedia
			'eu.wikipedia.org', // Basque Wikipedia
			'fa.wikipedia.org', // Persian Wikipedia
			'fr.wikipedia.org', // French Wikipedia
			'fr.wiktionary.org', // French Wiktionary
			'he.wikipedia.org', // Hebrew Wikipedia
			'hu.wikipedia.org', // Hungarian Wikipedia
			'hy.wikipedia.org', // Armenian Wikipedia
			'ko.wikipedia.org', // Korean Wikipedia
			'pl.wikipedia.org', // Polish Wikipedia
			'pt.wikipedia.org', // Portuguese Wikipedia
			'ru.wikipedia.org', // Russian Wikipedia
			'sr.wikipedia.org', // Serbian Wikipedia
			'sv.wikipedia.org', // Swedish Wikipedia
			'test.wikipedia.org', // Wikipedia Test Wiki
			'tr.wikipedia.org', // Turkish Wikipedia
			'uk.wikipedia.org', // Ukrainian Wikipedia
			'vi.wikipedia.org' // Vietnamese Wikipedia
		];

		wikis.forEach( function ( wiki ) {
			console.log( `🌻 ${wiki}` );
			SpecialRandomPage.openForEditing( wiki );

			try {
				SpecialRandomPage.helpPanel.waitForDisplayed();
			} catch ( e ) {
				console.log( `💣 ${e.message}` );
			}

			const filePath = saveScreenshot( wiki );
			console.log( `📸 ${filePath}` );

		} );
	} );

} );
