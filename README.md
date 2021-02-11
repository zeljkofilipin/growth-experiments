# GrowthExperiments help panel Selenium tests

For more information see [Growth/Focus on help desk/Help panel](https://www.mediawiki.org/wiki/Growth/Focus_on_help_desk/Help_panel) and [MediaWiki Selenium](https://www.mediawiki.org/wiki/Selenium) pages.

## Setup

Create `.env` file in the root of the repository.

    MEDIAWIKI_PASSWORD=not-the-real-one
    MEDIAWIKI_USER=not-the-real-one
    MW_SCRIPT_PATH=/w
    MW_SERVER=http://localhost:8080

Chromedriver has to run in one terminal window:

    chromedriver --url-base=wd/hub --port=4444

## Run all specs

In another terminal window:

    npm run selenium-test

## Run specific tests

Filter by file name:

    npm run selenium-test -- --spec tests/selenium/specs/[FILE-NAME]

Filter by file name and test name:

    npm run selenium-test -- --spec tests/selenium/specs/[FILE-NAME] --mochaOpts.grep [TEST-NAME]

## Super-Linter

[![GitHub Super-Linter](https://github.com/zeljkofilipin/GrowthExperiments/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
