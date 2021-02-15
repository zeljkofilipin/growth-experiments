# GrowthExperiments help panel Selenium tests

For more information see [Growth/Focus on help desk/Help panel](https://www.mediawiki.org/wiki/Growth/Focus_on_help_desk/Help_panel) and [MediaWiki Selenium](https://www.mediawiki.org/wiki/Selenium) pages.

## Install dependencies

    npm ci

## Setup

Create `.env` file in the root of the repository.

    MEDIAWIKI_PASSWORD=not-the-real-one
    MEDIAWIKI_USER=not-the-real-one
    MW_SCRIPT_PATH=/w
    MW_SERVER=https://test.wikipedia.org

## Run all specs

    npm run selenium-test

## Super-Linter

[![GitHub Super-Linter](https://github.com/zeljkofilipin/GrowthExperiments/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
