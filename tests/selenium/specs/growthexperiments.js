'use strict';

const assert = require( 'assert' );
const UserLoginPage = require( 'wdio-mediawiki/LoginPage' );
const SpecialRandomPage = require( '../pageobjects/special.random.page' );

describe( 'GrowthExperiments$', function () {

	it( 'help panel should be displayed at Special:Random', function () {
		UserLoginPage.loginAdmin();

		SpecialRandomPage.open();

		assert( SpecialRandomPage.helpPanel.isDisplayed() );
	} );

} );
