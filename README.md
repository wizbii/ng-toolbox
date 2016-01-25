# ng-toolbox

Set of Angular utilities used at [Wizbii](https://www.wizbii.com/).

## Download

* bower: `bower install ng-toolbox`
* npm: `npm install ng-toolbox`
* [Direct download](https://github.com/wizbii/ng-toolbox/releases)

## Change Log

### 1.0.0 - 2016-01-25

* Add tabs directive
* Add focusMe directive
* Add popup directive
* Add dropdown directive
* truncate now removes html tags
* Loader: add `isntLoading` to check that a state isn't loading

### 0.1.0 - 2015-10-18

* Add Loader class
* Add documentation on how to publish a new release
  * GitHub and git tags
  * npm
  * bower
  * Add a note on semver usage

### 0.0.0 - 2015-10-17

* Setup repository and workflow
* Publish to npm and bower
* Add truncate filter

## Contributing

### Installation

1. `npm install`

Please make sure your code editor supports `.editorconfig` files.

### Scripts

* `npm run build` - build the application from the `./src` files using webpack and babel.
* `npm run test` - lint javascript code using [standard](http://standardjs.com/) and then run tests from `./test/*.spec.js`.
* `npm run commit` - launch commit assistant to follow [Angular's commit guidelines]((https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)).

### Commit Guidelines

While not required, it is recommended to follow [some convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) when committing stuff in this repository.
To do so, just `git add` the files you want to commit and `npm run commit`.

Note that there is a pre-commit git hook that runs the `test` task when calling `git commit`.
Also, `npm run commit` is going to run the tests twice: once before the assistant and one more time afterwards, when actually committing.
While making the process slightly longer, it'll prevent you from filling the whole assistant when tests are not passing.

### Releases

Please make sure to follow the [semantic versioning](http://semver.org/) convention when bumping version.

1. Update the change log in the README.md (add the release date, remove checkboxes)
2. Update the version number in the `package.json`
3. Use the release script like so: `bash release.sh`

Note: you'll have to be part of Wizbii's organization to publish new releases to npm.
Run `npm adduser wizbii` and then fill in the credentials ;)
