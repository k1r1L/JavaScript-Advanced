let expect = require('chai').expect;
let isOddOrEven = function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
};

describe('isOddOrEven Tests', function () {
    it('Pass a number (should return undefined)', function () {
        let result = isOddOrEven(23);
        expect(result).to.be.undefined;
    });
    it('Pass a string with odd length (should return odd)', function () {
        let result = isOddOrEven('ddd');
        expect(result).to.be.equal('odd', 'Function did not return the correct result!');
    });
    it('Pass a string with even length (should return even)', function () {
        let result = isOddOrEven('lolo');
        expect(result).to.be.equal('even', 'Function did not return the correct result!');
    });
});
