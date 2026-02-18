const operations = require('../src/operations');

// npm install axios for testing async functions
// like fetching data from an API, etc.

test('adds 1 + 2 to equal 3', () => {
    expect(operations.add(1, 2)).toBe(3);
});

//in terminal run npm test to execute the tests.
// make sure that jest is installed as a dev dependency in your package.json file.
// and that you have a test script defined as "test": "jest" in your package.json file.
// "test": "jest --coverage" 
// -- coverage is used to generate code coverage report