class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(innerLength) {
        if(innerLength < 0){
            this._innerLength = 0;
        } else {
            this._innerLength = innerLength;
        }
    }

    decrease(length) {
        this.innerLength -= length;
    }

    increase(length) {
        this.innerLength += length;
    }

    toString() {
        if(this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        }

        return this.innerString;
    }
}