'use strict';

const assert = require( 'assert' );
const UserLoginPage = require( 'wdio-mediawiki/LoginPage' );
const SpecialRandomPage = require( '../pageobjects/special.random.page' );

describe( 'GrowthExperiments', function () {

	it( 'help panel should be displayed when editing a random page', function () {
		UserLoginPage.loginAdmin();

		const wikis = [
			'test.wikipedia.org'
		];

		wikis.forEach( function ( wiki ) {
			console.log( wiki );
			SpecialRandomPage.openForEditing( wiki );
			SpecialRandomPage.helpPanel.waitForDisplayed();
			assert( SpecialRandomPage.helpPanel.isDisplayed() );
			browser.pause( 5000 );
		} );
	} );

} );
