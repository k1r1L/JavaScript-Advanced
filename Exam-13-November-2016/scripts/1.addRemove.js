function attachEvents() {
    $('#btnAdd').click(addTown);
    $('#btnDelete').click(deleteTown);
    
    function addTown() {
        let inputBox = $('#newItem');
        if(inputBox.val() !== ''){
            $('#towns')
                .append($('<option>')
                    .text(inputBox.val()))
            inputBox.val('');
        }
    }
    
    function deleteTown() {
        $('#towns')
            .find('option:selected')
            .remove();
    }
}