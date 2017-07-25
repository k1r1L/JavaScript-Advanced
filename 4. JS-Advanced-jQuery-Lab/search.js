function search() {
    let pattern = $('#searchText').val();
    let matched =
        $(`ul#towns li:contains(${pattern})`);
    let allLi =  $(`ul#towns li`);
    allLi.css('font-weight', '');
    matched.css('font-weight', 'bold');
    $('#result').text(`${matched.length} matches found.`)
}