function initializeTable() {
    // Attach event listeners to Create
    $('#createLink').click(addCountry);
    // Add default entries -> call create table row & append to table
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();

    // Adjust links
    function fixLinks() {
        $('tr a').css('display', 'inline');
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }

    // Read input and call create row
    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountry(country, capital);
        fixLinks();
    }

    // Create table row
    function createCountry(country, capital) {
        $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)))
            .appendTo($('#countriesTable'))
    }

    //- Functions
    //-- Move row up
    function moveUp() {
        let currentTableRow = $(this)
            .parent() // td
            .parent(); // tr
        let previousTableRow = currentTableRow.prev();

        currentTableRow
            .insertBefore(previousTableRow);
        fixLinks();
    }

    //-- Move row down
    function moveDown() {
        let currentTableRow = $(this)
            .parent() // td
            .parent(); // tr
        let nextTableRow = currentTableRow.next();

        currentTableRow
            .insertAfter(nextTableRow);
        fixLinks();
    }

    //-- Delete row
    function deleteRow() {
        $(this)
            .parent()
            .parent()
            .remove();
        fixLinks();
    }
}