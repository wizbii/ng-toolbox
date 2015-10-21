# ng-toolbox

A set of Angular utilities we use at Wizbii.

## Download

* Download via bower: `bower install ng-toolbox`
* Download via npm: `npm install ng-toolbox`
* [Direct download](https://github.com/wizbii/ng-toolbox/releases)

## Change Log

### 0.2.0 - Unreleased

* [ ] Add tracker directive

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

1. Update the README.md change log (add the release date, remove checkboxes)
2. Update the version number in the `package.json`
3. Commit and push the changes: `git commit` then `git push`
4. Tag the version and push it to GitHub: `git tag <VERSION NUMBER>` then `git push --tags`

GitHub and Bower rely on the git repository tags so there's nothing special to do for them.
However, we need to publish it to npm:

```
npm publish
```

Note: you'll have to be part of Wizbii's organisation to publish new releases to npm as it's the author.
Run `npm adduser wizbii` and then fill in the credentials ;)
