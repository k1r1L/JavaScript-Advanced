class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput() {
        this._elements.on('input', (event) => {
            // When elements change so does the value
            let text = $(event.target).val();
            this._value = text;
            for (let el of this._elements) {
                $(el).val(text);
            }
        })
    }
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        // When value changes so do the elements
        for (let el of this._elements) {
            $(el).val(value);
        }
    }
    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this._value);
    }
}

