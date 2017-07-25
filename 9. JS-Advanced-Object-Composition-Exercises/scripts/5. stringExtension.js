(function () {
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return str + this;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.prototype.truncate = function (n) {
        if(n >= this.length){
            return this.toString();
        }

        let substrOfThis = this.substring(0, n).trim();
        let indexOfSpace = substrOfThis.lastIndexOf(' ');
        if(indexOfSpace !== -1){
            return substrOfThis.substring(0, indexOfSpace) + '...';
        }

        return '.'.repeat(n);
    };

    String.format = function (string) {
        let placeholderIndex = 0;
        for(let i = 1; i < arguments.length; i++, placeholderIndex++) {
            string = string
                .replace(`{${placeholderIndex}}`, arguments[i]);
        }

        return string;
    };
})()