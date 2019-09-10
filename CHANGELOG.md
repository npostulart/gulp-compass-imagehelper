# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]
### Changed
- Changelog format to match _Keep a Changelog_

## [1.1.0] - 2018-06-06
### Added
- use eslint for linting

### Changed
- replace gulp-util according to https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
- update README to include gulp 4 setup
- update example to use gulp 4
- use npm scripts for dev instead of gulp
- update package dependencies

## [1.0.5] - 2017-10-13
### Fixed
- broken Inlined SVG and imageurl, refs pull request #5

## [1.0.4] - 2017-08-11
### Fixed
- missed escape of round parentheses within SVG images, refs pull request #2

## [1.0.3] - 2017-07-27
### Added
- .npmignore file

### Fixed
- don't encode svg data in base64, but output escaped utf8 version, refs pull request #1

## [1.0.2] - 2016-04-27
### Fixed
- removed check for function exists due to update in libsass (https://github.com/sass/libsass/issues/1550)

## [1.0.1] - 2016-02-11
### Added
- added jscs for linting

### Changed
- updated image-size plugin for better SVG dimension lookup

## [1.0.0] - 2016-02-10

Fork from [gulp-compass-imagehelper](https://github.com/phlppschrr/gulp-compass-imagehelper)

### Added
- added options to disable placeholder and inline-images

### Fixed
- replacing @ for imageInfo.fullname with - due to issues

### Changed
- updated mustache template to reflect new options
- using line instead of block comments to prevent output on Sass compile
- using hypens instead of underscores
- using single quotes for strings
- moved image path prefix into a variable
- fixed indentation for output
- removed unused lines
- always using brackets for conditions in JS
- removed console.log from svg size detection
- added pretty notice message if dimension of svg can not be determined
- set encoding in global variable and use for file content string encoding
- some code formatting
- improved mustache template helper functions
- wrapped every function in mustache template inside a function-exists check
