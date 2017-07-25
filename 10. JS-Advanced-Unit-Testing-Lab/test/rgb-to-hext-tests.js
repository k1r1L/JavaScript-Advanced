let rgbToHexColor = require('../scripts/6.rgb-to-hex').rgbToHexColor;
let expect = require("chai").expect;

describe('RgbToHex(red, green, blue)', function () {
    it('red smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(-1, 123, 54)).to.be.undefined
    });
    it('green smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(22, -123, 54)).to.be.undefined
    });
    it('blue smaller than zero->should return undefined', function () {
        expect(rgbToHexColor(22, 123, -54)).to.be.undefined
    });
    it('red larger than 255->should return undefined', function () {
        expect(rgbToHexColor(555, 123, 54)).to.be.undefined
    });
    it('green larger than 255->should return undefined', function () {
        expect(rgbToHexColor(23, 444, 54)).to.be.undefined
    });
    it('blue larger than 255->should return undefined', function () {
        expect(rgbToHexColor(1, 123, 543)).to.be.undefined
    });
    it('Red, Green, Blue with value 255 should return #FFFFFF', function () {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    });
    it('red as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(2.3, 444, 54)).to.be.undefined
    });
    it('green as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(23, 44.4, 54)).to.be.undefined
    });
    it('blue as a floating point num->should return undefined', function () {
        expect(rgbToHexColor(23, 444, 5.4)).to.be.undefined
    });
    it('all rgb values as objects->should return undefined', function () {
        expect(rgbToHexColor({}, [], new Map)).to.be.undefined
    });
    it('should return #FFFFFF for (0, 0, 0)', function(){
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    });
});