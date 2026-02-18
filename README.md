## Jest
jest: js unit testing framework
  npm install jest
// https://github.com/marketplace/actions/jest-coverage-report
  generates test cases in table view

in terminal run npm test to execute the tests.
 make sure that jest is installed as a dev dependency in your package.json file.
 and that you have a test script defined as "test": "jest" in your package.json file.
 "test": "jest --coverage" 
 -- coverage is used to generate code coverage report

## CodeQL
 security->code scanning-> setup codeQL (keep it default)
 this creates a codeQL workflow that finds vulnerability and error in your code throughout the repository

## Dependabot
  keeps your dependencies up-to-date
  enable dependabot in security->dependabot
  create dependabot.yml in your .github dir

  2 types of dependabot
  dependabot version update
  dependabot security update (i perfer this)

## Secret scanning
  this is really useful for me i may have had put some important private keys in one of my projects...
  this checks any secret keys or like type patterns in the whole repo including entire git history, comments, description, commits, branches and everything else
  goto security->secret scanning
