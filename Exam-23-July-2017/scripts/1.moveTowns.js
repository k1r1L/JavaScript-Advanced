function move(command) {
    let availableTowns = $('#available-towns');
    let selectedTowns = $('#selected-towns');
    let output = $('#output');
    switch (command) {
        case 'right':
            selectedTowns
                .append(availableTowns
                    .find('option:selected'));
            break;
        case 'left':
            availableTowns
                .append(selectedTowns
                    .find('option:selected'));
            break;
        case 'print':
            output.empty(); // empty the output
            output.append(selectedTowns
                .find('option')
                .toArray()
                .map(el => el.textContent)
                .join('; '));
            break;
    }
}