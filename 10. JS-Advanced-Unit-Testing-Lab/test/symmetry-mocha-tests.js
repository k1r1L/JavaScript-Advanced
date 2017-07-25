let expect = require("chai").expect;
let isSymmetric = require('../scripts/5.symmetry').isSymmetric;

describe("isSymmetric(arr) check if array is symmetric", function () {
    it("Should not be an array", function () {
        expect(isSymmetric(3)).to.be.false
    });
    it("[1, 3, 1] Should be symmetric", function () {
        expect(isSymmetric([1, 3, 1])).to.be.true
    });
    it("[1, 3, 2] Should not be symmetric", function () {
        expect(isSymmetric([1, 3, 2])).to.be.false
    });
    it("[] Should be symmetric", function () {
        expect(isSymmetric([])).to.be.true
    });
    it("[2, 'kircata', 'kircata', 2] should be symmetric", function () {
        expect(isSymmetric([2, 'kircata', 'kircata', 2])).to.be.true
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function() {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] );
        expect(symmetric).to.be.equal(true);
    });
});