function solve(commands) {
    let processor = (function () {
        let list = [];
        return function (command) {
            let [type, str] = command.split(' ');
            switch (type) {
                case 'add':
                    list.push(str);
                    break;
                case 'remove':
                    list = list.filter(el => el !== str);
                    break;
                case 'print':
                    console.log(list.toString());
                    break;
            }
        }
    })();

    for(let command of commands) {
        processor(command);
    }
}