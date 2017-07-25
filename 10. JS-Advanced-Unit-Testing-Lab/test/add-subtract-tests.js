let createCalculator = require('../scripts/7.addSubtract').createCalculator;
let expect = require('chai').expect;

describe("Calculator tests", function () {

    let calculator;
    beforeEach(function () {
        calculator = createCalculator();
    });

    describe('Test return value', function () {
        it('Expect calc to be an object', function () {
            expect(typeof calculator).to.be.equal('object');
        });
        it('Expect add to be a function', function () {
            expect(typeof calculator.add).to.be.equal("function")
        });
        it('Expect subtract to be a function', function () {
            expect(typeof calculator.subtract).to.be.equal("function")
        });
        it('Expect get to be a function', function () {
            expect(typeof calculator.get).to.be.equal("function")
        });
    });

    describe('Test the internal value', function () {
        it('Expect value to be undefined', function () {
            expect(calculator.value).to.be.undefined
        });
    });
    describe('Test functionality', function () {
        it('Expect get to return 0', function () {
            expect(calculator.get()).to.be.equal(0);
        });
        it('Expect add(4) to return 4', function () {
            calculator.add(4);
            expect(calculator.get()).to.be.equal(4)
        });
        it('Expect add(4) add(3) to return 7', function () {
            calculator.add(4);
            calculator.add(3);
            expect(calculator.get()).to.be.equal(7)
        });
        it('Expect subtract(4) to return -4', function () {
            calculator.subtract(4);
            expect(calculator.get()).to.be.equal(-4)
        });
        it('Expect subtract(4) subtract(3) to return -7', function () {
            calculator.subtract(4);
            calculator.subtract(3);
            expect(calculator.get()).to.be.equal(-7)
        });
        it('Expect add("3") to return 3', function () {
            calculator.add("3");
            expect(calculator.get()).to.be.equal(3);
        });
        it('Expect subtract("4") to return -4', function () {
            calculator.subtract("4");
            expect(calculator.get()).to.be.equal(-4);
        });
        it('Expect subtract("lol") to return NaN', function () {
            calculator.subtract("lol");
            expect(calculator.get()).to.be.NaN
        });
    })

});
