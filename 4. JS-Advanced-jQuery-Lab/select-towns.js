function attachEvents() {
    $('#items').on('click', 'li', clickTownsEvent);
    $('#showTownsButton').on('click', showTownsButton);

    function clickTownsEvent() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }

    function showTownsButton() {
        let result =
            $('#items li[data-selected=true]')
            .toArray()
            .map(li => li.textContent)
            .join(', ');

        $('#selectedTowns').text(`Selected towns: ${result}`);
    }
}