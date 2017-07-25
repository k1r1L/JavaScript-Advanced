(function() {

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

    class Form {
        constructor() {
            this._element = $('<div>').addClass('form'); // div with class form
            this.textboxes = arguments;
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(args) {
            for (let argument of args) {
                if (!argument instanceof Textbox) {
                    throw new Error('The give parameter is not a textbox!');
                }
            }

            this._textboxes = args;
            for (let textbox of this._textboxes) {
                for (let el of textbox._elements) {
                    this._element.append($(el));
                }
            }
        }

        submit() {
            let allValid = true;
            for (let textbox of this._textboxes) {
                if  (textbox.isValid()) {
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                } else {
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}())
