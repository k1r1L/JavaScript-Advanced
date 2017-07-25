let expect = require('chai').expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Math Enforcer Unit Tests', function () {
    describe('addFive tests', function () {
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.addFive('ddd')).to.be.undefined;
        });
        it('with a positive integer value (should return correct result)', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('with a negative integer value (should return correct result)', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('with a floating-point value (should return correct result)', function () {
            expect(mathEnforcer.addFive(5.53)).to.be.closeTo(10.53, 0.01);
        });
    });

    describe('subtractTen tests', function () {
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.subtractTen('ddd')).to.be.undefined;
        });
        it('with a positive integer value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(25)).to.be.equal(15);
        });
        it('with a negative integer value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('with a floating-point value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(10.53)).to.be.closeTo(0.53, 0.01);
        });
    });

    describe('subtractTen tests', function () {
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.subtractTen('ddd')).to.be.undefined;
        });
        it('with a positive integer value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(25)).to.be.equal(15);
        });
        it('with a negative integer value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('with a floating-point value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(10.53)).to.be.closeTo(0.53, 0.01);
        });
    });

    describe('sum tests', function () {
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.sum('ddd', 2)).to.be.undefined;
        });
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.sum(2, 'ddd')).to.be.undefined;
        });
        it('with a positive integers value (should return correct result)', function () {
            expect(mathEnforcer.sum(25, 22)).to.be.equal(47);
        });
        it('with a negative integers value (should return correct result)', function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });
        it('with a floating-point values (should return correct result)', function () {
            expect(mathEnforcer.sum(10.53, 22.11)).to.be.closeTo(32.64, 0.01)
        });
    });
});