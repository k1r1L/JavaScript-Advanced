let expect = require('chai').expect;
let listCreator = function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
};

describe('List Tests', function () {
    let list;
    beforeEach(function () {
        list = listCreator();
    });

    it('Test empty list', function () {
        expect(list.toString()).to.equal('', 'List was not empty!')
    });


    describe('Add Tests', function () {
        it('Add one item (should add item)', function () {
            list.add(4);
            expect(list.toString()).to.equal('4', 'List did not add item!');
        });
        it('Add 3 items (should add items)', function () {
            list.add('pesho');
            list.add('pesho');
            list.add('pesho');
            expect(list.toString()).to.equal('pesho, pesho, pesho', 'List did not add items!');
        });
    });

    describe('Delete', function () {
        it('with floating-point should return undefined', function () {
            let result = list.delete(3.12);
            expect(result).to.be.undefined;
        });
        it('with empty list should return undefined', function () {
            expect(list.delete(0)).to.be.undefined;
        });
        it('with index as much as list length should return undefined', function () {
            list.add(3);
            list.add(4);
            expect(list.delete(2)).to.be.undefined;
        });
        it('with negative index should return undefined', function () {
            list.add(3);
            list.add(4);
            expect(list.delete(-2)).to.be.undefined;
        });

        describe('Correct delete', function () {
            it('with index 0 should return correct item', function () {
                list.add(5);
                list.add(6);
                list.add(7);
                expect(list.delete(0)).to.be.equal(5, 'List delete did not return correct value');
            });
            it('with index 0 should delete from list', function () {
                list.add(5);
                list.add(6);
                list.add(7);
                list.delete(0);
                expect(list.toString()).to.be.equal('6, 7', 'List is not empty!');
            });
        });
    });
});
