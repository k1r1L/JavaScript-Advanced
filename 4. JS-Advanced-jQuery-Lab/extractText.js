function extractText() {
    let elements = $('ul#items li')
        .toArray()
        .map(li => li.textContent)
        .join(', ');

    $('#result').text(elements);
}