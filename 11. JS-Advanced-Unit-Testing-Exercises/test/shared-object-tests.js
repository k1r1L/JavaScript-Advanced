let chai = require('chai');
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = chai.expect;

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('Shared Object Unit Tests', function () {
    describe('Initial value tests', function () {
        it('Initial value for name (should be null)', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('Initial value for name (should be null)', function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('changeName tests', function () {
        it('Pass empty string (should not change)', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal(null, 'Name should not change');
        });
        it('Pass empty string with preexisting value (should not change)', function () {
            sharedObject.name = 'Nakov';
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Nakov', 'Name should not change');
        });
        it('Pass non-empty string (should change)', function () {
            sharedObject.changeName('Kiril');
            expect(sharedObject.name).to.be.equal('Kiril', 'Name should change');
        });

        describe('changeName textbox tests', function () {
            it('Pass empty string (should not change textbox)', function () {
                let nameTxt = $('#name');
                sharedObject.changeName('');
                expect(nameTxt.val()).to.be.equal('Kiril', 'Name should not change');
            });
            it('Pass non-empty string (should change)', function () {
                let nameTxt = $('#name');
                sharedObject.changeName('Vladi');
                expect(nameTxt.val()).to.be.equal('Vladi', 'Name should change');
            });
        })
    });
    
    describe('changeIncome tests', function () {
        it('Pass object inside should not change income', function () {
            sharedObject.changeIncome({});
            expect(sharedObject.income).to.be.null;
        });
        it('Pass object inside with predefined value should not change income', function () {
            sharedObject.income = 22;
            sharedObject.changeIncome({});
            expect(sharedObject.income).to.be.equal(22);
        });
        it('Pass floating-point should not change income', function () {
            sharedObject.income = 33;
            sharedObject.changeIncome(22.1);
            expect(sharedObject.income).to.be.equal(33);
        });
        it('Pass negative integer should not change income', function () {
            sharedObject.income = 33;
            sharedObject.changeIncome(-33);
            expect(sharedObject.income).to.be.equal(33);
        });
        it('Pass zero should not change income', function () {
            sharedObject.income = 33;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(33);
        });
        it('Pass positive integer should change income', function () {
            sharedObject.income = 33;
            sharedObject.changeIncome(44);
            expect(sharedObject.income).to.be.equal(44);
        });

        describe('changeIncome textbox tests', function () {
            it('Pass object inside should not change income', function () {
                sharedObject.changeIncome(33);
                let incomeTxt = $('#income');
                sharedObject.changeIncome({});
                expect(incomeTxt.val()).to.be.equal('33');
            });
            it('Pass floating-point should not change income', function () {
                sharedObject.changeIncome(33);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(22.2);
                expect(incomeTxt.val()).to.be.equal('33');
            });
            it('Pass negative integer should not change income', function () {
                sharedObject.changeIncome(33);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(-50);
                expect(incomeTxt.val()).to.be.equal('33');
            });
            it('Pass zero should not change income', function () {
                sharedObject.changeIncome(33);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(0);
                expect(incomeTxt.val()).to.be.equal('33');
            });
            it('Pass positive integer should change income', function () {
                sharedObject.changeIncome(33);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(50);
                expect(incomeTxt.val()).to.be.equal('50');
            });
        })
    });

    describe('changeName tests', function () {
        it('Pass empty string (should not change)', function () {
            sharedObject.changeName('Kiril');
            let nameTxt = $('#name');
            nameTxt.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
        it('Pass non-empty string (should change)', function () {
            sharedObject.changeName('Kiril');
            let nameTxt = $('#name');
            nameTxt.val('Vladi');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Vladi');
        });
    });

    describe('changeIncome tests', function () {
        it('Pass a string (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('Kiril');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });
        it('Pass a floating-point (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('22.2');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });
        it('Pass a negative integer (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('-11');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });
        it('Pass zero (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });
        it('Pass a positive integer (should change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('66');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(66);
        });
    })
});
