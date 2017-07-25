let expect = require('chai').expect;
let Console = class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                var placeholders = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (placeholders.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < placeholders.length; i++) {
                        let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(placeholders[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

describe('C# Console Unit Tests', function () {
    it('writeLine is a functions', function () {
        expect(typeof Console.writeLine).to.be.equal('function');
    });

    describe('tests with one argument passed', function () {
        it('should return the input string', () => {
            let res = Console.writeLine('test');
            expect(res).to.equal('test');
        });

        it('should return undefined on non-string argument', () => {
            let res = Console.writeLine(123);
            expect(res).to.equal(undefined);
        });

        it('should throw error оn empty input', () => {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });

        it('should return the input object as JSON', () => {
            let obj = {'name': 'Stamat'};
            let res = Console.writeLine(obj);
            expect(res).to.equal(JSON.stringify(obj));
        });
    });

    describe('tests with multiply arguments', function () {
        it('should throw TypeError on non-string first argument', () => {
            expect(() => Console.writeLine(123, 'test')).to.throw(TypeError);
        });

        it('should throw RangeError on less than expected placeholder parameters', () => {
            expect(() => Console.writeLine('Test {0}, {1} {2}', 'first', 'second')).to.throw(RangeError);
        });

        it('should throw RangeError on more than expected placeholder parameters', () => {
            expect(() => Console.writeLine('Test {0}, {1} {2}', 'first', 'second', 'third', 'fourth')).to.throw(RangeError);
        });

        it('should throw RangeError on negative placeholder index', () => {
            expect(() => Console.writeLine('Test {-5}, {1} {2}', 'first', 'second', 'third')).to.throw(RangeError);
        });

        it('should throw RangeError on out-of-range placeholder index', () => {
            expect(() => Console.writeLine('Test {0}, {1} {20}', 'first', 'second', 'third')).to.throw(RangeError);
        });

        it('should throw RangeError on out-of-range placeholder index', () => {
            expect(() => Console.writeLine('Test {20}', 'first')).to.throw(RangeError);
        });

        it('should replace correctly all placeholders', () => {
            expect(Console.writeLine('Test {0}, {1} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test first, second third - chetvyrti');
        });

        it('should replace correctly all placeholders on mixed placeholder numbers', () => {
            expect(Console.writeLine('Test {1}, {0} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test second, first third - chetvyrti');
        });

        it('should replace correctly one placeholder', () => {
            expect(Console.writeLine('{0}', 'first')).to.equal('first');
        });
    });
});
