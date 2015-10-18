# ng-toolbox

A set of Angular utilities we use at Wizbii.

## Download

* Download via bower: `bower install ng-toolbox`
* Download via npm: `npm install ng-toolbox`
* [Direct download](https://github.com/wizbii/ng-toolbox/releases)

## Change Log

### 0.1.0 - Unreleased

* [ ] Add tracker directive
* [x] Add Loader class
* [x] Add documentation on how to publish a new release
  * [x] GitHub and git tags
  * [x] npm
  * [x] bower
  * [x] Add a note on semver usage

*Some more stuff incoming...*

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

1. Update the README.md change log (add the release date, remove checkboxes)
2. Update the version number in the `package.json`

Tag the version so it creates a release on GitHub:

```
git tag <VERSION NUMBER>
git push --tags
```

The new release should now appear in the [releases](https://github.com/wizbii/ng-toolbox/releases).
There's nothing special to do for bower as its going to rely on the GitHub's repository version.
However, we need to publish it to npm:

```
npm publish
```

Done!
