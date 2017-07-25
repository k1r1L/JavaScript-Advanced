function wikiParser(selector) {
    // Capture text
    let text = $(selector).text();

    // Parse basic markup consecutively
    text = parseBasic(text, /'''(.+?)'''/, 'b'); // Bold
    text = parseBasic(text, /''(.+?)''/, 'i'); // Italics
    text = parseBasic(text, /===(.+?)===/, 'h3'); // Heading 3
    text = parseBasic(text, /==(.+?)==/, 'h2'); // Heading 2
    text = parseBasic(text, /=(.+?)=/, 'h1'); // Heading 1

    // Parse hyperlinks
    text = parseLink(text);

    $(selector)[0].innerHTML = text;
    function parseBasic(input, pattern, tag) {
        let regex = new RegExp(pattern);
        while (input.search(regex) > -1) {
            input = input.replace(regex, '<' + tag + '>' + input.match(regex)[1] + '</' + tag + '>');
        }
        return input;
    }

    function parseLink(input) {
        // First pass, piped links
        let regex = new RegExp(/\[\[([^\[\]]+?)\|(.+?)\]\]/);
        while (input.search(regex) > -1) {
            let link = input.match(regex)[1];
            let desc = input.match(regex)[2];
            input = input.replace(regex, '<a href="/wiki/' + link + '">' + desc + '</a>');
        }
        // Second pass, non-piped links
        regex = new RegExp(/\[\[([^\[\]]+?)\]\]/);
        while (input.search(regex) > -1) {
            let group = input.match(regex)[1];
            input = input.replace(regex, '<a href="/wiki/' + group + '">' + group + '</a>');
        }
        return input;

    }
}
