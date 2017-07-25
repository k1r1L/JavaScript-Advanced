function solve(commands) {
    let processor = (function () {
        let text = '';

        return function (command) {
            let tokens = command.split(' ');
            switch (tokens[0]) {
                case 'append':
                    text += tokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(+tokens[1]);
                    break;
                case 'removeEnd':
                    text = text.substr(0, text.length - Number(tokens[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();

    for (let command of commands) {
        processor(command);
    }
}