#!/usr/bin/env bash

# adapted from:
# https://github.com/pouchdb/pouchdb/blob/master/bin/release.sh

# make sure deps are up to date
rm -rf node_modules
npm install

# get current version
VERSION=$(node --eval "console.log(require('./package.json').version)")

# build in a temporary branch
git checkout -b build
npm run build
git add dist

# remove irrelevant files
git rm -r test .editorconfig karma.conf.js release.sh webpack.config.js
git commit -m "release $VERSION"

# create tag and push
git tag $VERSION
git push --tags git@github.com:wizbii/ng-toolbox.git $VERSION

# publish to npm
npm publish

# cleanup
git checkout master
git branch -D build
