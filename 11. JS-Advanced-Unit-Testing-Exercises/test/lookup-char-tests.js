let expect = require('chai').expect;
let lookupChar = function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
};

describe('lookupChar Unit Tests', function () {
    describe('Correct type tests', function () {
        it('Pass an object (should return undefined)', function () {
            let result = lookupChar({}, 3);
            expect(result).to.be.undefined;
        });
        it('Pass a floating-point (should return undefined)', function () {
            let result = lookupChar('message' , 3.3);
            expect(result).to.be.undefined;
        });

    });

    describe('Index correctness tests', function () {
        it('Pass a negative index (should return Incorrect index)', function () {
            let result = lookupChar('message', -3);
            expect(result).to.be.equal('Incorrect index', 'The return message is not correct!')
        });
        it('Pass a bigger index (should return Incorrect index)', function () {
            let result = lookupChar('message', 10);
            expect(result).to.be.equal('Incorrect index', 'The return message is not correct!')
        });
        it('Pass an index as long as the string length (should return Incorrect index)', function () {
            let result = lookupChar('message', 7);
            expect(result).to.be.equal('Incorrect index', 'The return message is not correct!')
        });
    });

    it('Pass correct parameters (should return correct symbol at index)', function () {
        let result = lookupChar('message', 0);
        expect(result).to.be.equal('m', 'The symbol was not correct!');
    });
    it('Pass correct parameters (should return correct symbol at index)', function () {
        let result = lookupChar('message', 2);
        expect(result).to.be.equal('s', 'The symbol was not correct!');
    });
});
