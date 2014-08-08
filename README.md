# XT-Themes

This is the themes repository for FusionCharts.

## List of themes

 - carbon
 - fint
 - ocean
 - zune

## Repository organization

 - `develop`: All development and CI scripts are stored here.
     - `ci`: CI scripts are stored here
     - `src`: Theme source files are stored here.
 -  `themes`: Compiled, minified theme files, ready to use for production.

## Theme naming conventions

Each theme name is a lowercase word. The file name is in the format `fusioncharts.theme.<themename>.js`. So the file name for the `carbon` theme is `fusioncharts.theme.carbon.js`.

# Developing themes

## Setting up the repository

Several CI scripts used in `xt-themes` use `node` modules. So, perform a `npm install` the first time you clone the repository. From the root of the project, run:

    $ npm install

## Repository workflow

This repository uses [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/).


## Creating a new theme

A boilerplate theme is provided at `develop/src/fusioncharts.theme.boilerplate.js`. You can use that as your base and create a new file in `develop/src` for your new theme using the theme naming convention mentioned above.

## Building themes

Run this script from the root of the project to compile theme files:

    $ npm test

## Release new version

 - Check the latest `version` in `package.json`. Decide what should be the next version bump based on [semver](http://semver.org).
 - Pull in latest `develop` and `master` branches.
 - Switch to `develop` branch.
 - Create and switch to a release branch based on the new version. If your new version is `1.0.0`, the release branch name will be `release/1.0.0`.
 - Update `version` in `package.json` to latest version, in this case, `1.0.0`.
 - Commit changes in `package.json` with a commit message: "Update package.json version to 1.0.0".
 - Run the release script from the root of the project:

        $ npm run-script release

 - The release script will make changes to the `themes` folder. Commit the changes to those modified files.
 - Close the release branch as per Git Flow methods and tag on the master branch with `1.0.0`.
 - Enjoy!