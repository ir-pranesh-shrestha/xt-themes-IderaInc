# Contributing to xt-themes

The `xt-themes` repository has been designed in the same style as `xt-edge`. Here is an overview of the directory structure:

- `develop`: This is the primary directory for contributing code and scripts.
    - `ci`: This directory contains the CI scripts, separated into sub-directories.
    - **`src`**: This directory contains the source themes. This is where a developer is supposed to edit themes or create new ones.
- `themes`: This directory will contain shippable theme files, compiled and minified.

## How to setup your development environment?

1. Clone the project

2. Install npm packages:

        $ npm install -d

3. Make sure there were no errors in installing npm packages. You are all set!

## How to test your code?

Make sure you have already set up your development environment. From the root directory of the project, run:

    $ npm test

> ** Before each push, ensure that `npm test` is successful. **

## How to commit and send pull requests?

This project follows regular git-flow. Refer to standard FusionCharts guidelines in `CONTRIBUTING.md` of `xt-edge` for details.

## How to create a new theme?

1. Copy `develop/src/fusioncharts.theme.boilerplate.js` to a new file in the same folder, replacing `boilerplate` with your choice of theme name.
2. Edit your new theme file.

## How to release a version?

1. Select a version name following the semvar convention, e.g. `0.0.1`.
2. Create a release branch from latest `develop` with the name `release/<version>`, e.g. `release/0.0.1`.
3. Update `version` information in `package.json` to the latest version.
4. Run the release script:

        $ npm run-script release

5. If everything works, make two commits:
    * First, commit only the change in `package.json`.
    * Then, commit the changes in `./themes` directory.
6. Merge the release branch into `master` and into `develop`.
7. Tag the latest commit on `master` with the version number, e.g. `0.0.1`.
8. Push `master` and `develop` to remote.
