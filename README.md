# ng-toolbox

A set of Angular utilities we use at Wizbii.

## Download

* Download via bower: `bower install ng-toolbox`
* Download via npm: `npm install ng-toolbox`
* [Direct download](https://github.com/wizbii/ng-toolbox/releases)

## Installation

1. `npm install`

Please make sure your code editor supports `.editorconfig` files.

## Scripts

* `npm run build` - build the application from the `./src` files using webpack and babel.
* `npm run test` - lint javascript code using [standard](http://standardjs.com/) and then run tests from `./test/*.spec.js`.
* `npm run commit` - launch commit assistant to follow [Angular's commit guidelines]((https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)).

## Commit Guidelines

While not required, it is recommended to follow [some convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) when committing stuff in this repository.
To do so, just `git add` the files you want to commit and `npm run commit`.

Note that there is a pre-commit git hook that runs the `test` task when calling `git commit`.
Also, `npm run commit` is going to run the tests twice: once before the assistant and one more time afterwards, when actually committing.
While making the process slightly longer, it'll prevent you from filling the whole assistant when tests are not passing.
