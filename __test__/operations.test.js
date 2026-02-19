const operations = require('../src/operations');

// npm install axios for testing async functions
// like fetching data from an API, etc.

test('adds 1 + 2 to equal 3', () => {
    expect(operations.add(1, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(operations.multiply(2, 3)).toBe(6);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(operations.subtract(5, 2)).toBe(3);
});

test('divides 10 / 2 to equal 5', () => {
    expect(operations.divide(10, 2)).toBe(5);
});

//in terminal run npm test to execute the tests.
// make sure that jest is installed as a dev dependency in your package.json file.
// and that you have a test script defined as "test": "jest" in your package.json file.
// "test": "jest --coverage" 
// -- coverage is used to generate code coverage report