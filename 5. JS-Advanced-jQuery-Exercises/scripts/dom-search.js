function domSearch(selecor, isCaseSensitive) {
    let container = $(selecor);
    $(container).addClass('items-control');
    appendAddControls();
    appendSearchControls();
    appendResultControls();

    function appendAddControls() {
        $(container)
            .append($('<div>')
                .addClass("add-controls")
                .append($('<label>')
                    .text("Enter text:")
                    .append($('<input>')))
                .append($('<a>')
                    .addClass("button")
                    .css("display", "inline-block")
                    .text("Add")
                    .on("click", addElementToList)));
    }

    function appendSearchControls() {
        $(container)
            .append($('<div>')
                .addClass("search-controls")
                .append($('<label>')
                    .text("Search:")
                    .append($('<input>')
                        .on("input", searchWithQuery))));
    }

    function appendResultControls() {
        $(container)
            .append($('<div>')
                .addClass('result-controls')
                .append($('<ul>')
                    .addClass("items-list")))
    }

    function addElementToList() {
        let textValue = $(".add-controls label input").val();
        $(".result-controls .items-list")
            .append($('<li>')
                .addClass("list-item")
                .append($('<a>')
                    .addClass('button')
                    .text('X')
                    .on('click', deleteItem))
                .append($('<strong>')
                    .text(textValue)));
    }

    function searchWithQuery() {
        let queryStr = $('.search-controls label input').val();
        if (isCaseSensitive) {
            $('.list-item strong')
                .toArray()
                .filter(item => item.textContent.indexOf(queryStr) === -1)
                .forEach(item => item.parentNode.style.display = "none");
        } else {
            $('.list-item strong')
                .toArray()
                .filter(item => item.textContent.toLowerCase().indexOf(queryStr.toLowerCase()) === -1)
                .forEach(item => item.parentNode.style.display = "none");
        }
    }

    function deleteItem() {
        $(this).parent().remove();
    }
}
