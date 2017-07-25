function generateSummary(selector) {
    $(selector).on('click', function () {
        let summaryText = $('#content strong').text();
        createSummary(summaryText);
    });

    function createSummary(summaryText) {
        // Create elements
        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(summaryText);

        // Append elements
        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        parent.append(summary);
    }
}