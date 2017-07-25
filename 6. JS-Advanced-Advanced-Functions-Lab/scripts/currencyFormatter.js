function result(currencyFormatter) {
    return function (value) {
        return currencyFormatter(',', '$', true, value);
    }
}