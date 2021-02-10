# GrowthExperiments help panel Selenium tests

For more information see https://www.mediawiki.org/wiki/Growth/Focus_on_help_desk/Help_panel and https://www.mediawiki.org/wiki/Selenium

## Setup

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