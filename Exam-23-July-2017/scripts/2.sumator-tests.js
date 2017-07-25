let expect = require('chai').expect;
let Sumator = require('./sumator');

describe('Sumator Unit Tests', function () {
    let mySumator;
    beforeEach(function () {
        mySumator = new Sumator();
    });

    describe('Initial Tests', function () {
        it('add is attached to proto', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true, 'Function is not attached to prototype!');
        });
        it('sumNums is attached to proto', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true, 'Function nums is not attached to prototype!');
        });
        it('removeByFilter is attached to proto', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true, 'Function is not attached to prototype!');
        });
        it('toString is attached to proto', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true, 'Function is not attached to prototype!');
        });
        it('data should be empty at initialization', function () {
            expect(mySumator.data.length).to.equal(0, 'Data should be empty at initialization!');
        });
    });

    // Add
    describe('Test add', function () {
        it('with one number', function () {
            mySumator.add(4);
            expect(mySumator.data.length).to.equal(1, 'Add did not work correctly!');
        });
        it('with two strings', function () {
            mySumator.add('pesho');
            mySumator.add('gosho');
            expect(mySumator.data.length).to.equal(2, 'Add did not work correctly!');
        });
        it('with three objects (dates)', function () {
            mySumator.add(new Date());
            mySumator.add(new Date());
            mySumator.add(new Date());
            expect(mySumator.data.length).to.equal(3, 'Add did not work correctly!');
        });
    });

    // Sum Nums
    describe('Test sum nums', function () {
        it('without numbers (should return zero)', function () {
            mySumator.add('Kiril');
            mySumator.add('Lololo');
            mySumator.add(new Date());
            expect(mySumator.sumNums()).to.equal(0, 'Did not return correct sum!');
        });
        it('with one number', function () {
            mySumator.add('Kiril');
            mySumator.add('Lololo');
            mySumator.add(new Date());
            mySumator.add(3);
            expect(mySumator.sumNums()).to.equal(3, 'Did not return correct sum!');
        });
        it('with a few numbers', function () {
            mySumator.add('Kiril');
            mySumator.add('Lololo');
            mySumator.add(new Date());
            mySumator.add(3);
            mySumator.add(3);
            mySumator.add(3.5);
            expect(mySumator.sumNums()).to.equal(9.5, 'Did not return correct sum!');
        });
    });

    // Remove By Filter
    describe('Test removeByFilter', function () {
        it('filter all odd numbers', function () {
            mySumator.add(1);
            mySumator.add(2);
            mySumator.add(3);
            mySumator.removeByFilter(x => x % 2 !== 0);
            expect(mySumator.toString()).to.equal('2', 'Remove By Filter did not filter correctly!')
        });
        it('filter all names that start with K', function () {
            mySumator.add('Kiro');
            mySumator.add('Lili');
            mySumator.add('Krasi');
            mySumator.add('Mimi');
            mySumator.add('Kamen');
            mySumator.removeByFilter(x => x.startsWith('K'));
            expect(mySumator.toString()).to.equal('Lili, Mimi', 'Remove By Filter did not filter correctly!');
        });
    });

    // toString
    describe('Test toString', function () {
        it('with one element', function () {
            mySumator.add(3);
            expect(mySumator.toString()).to.equal('3', 'ToString did not return correct result!');
        });
        it('with a few elements', function () {
            mySumator.add(3);
            mySumator.add(4);
            mySumator.add(5);
            expect(mySumator.toString()).to.equal('3, 4, 5', 'ToString did not return correct result!');
        });
        it('without elements', function () {
            expect(mySumator.toString()).to.equal('(empty)', 'ToString did not return correct result!');
        });
    });
});