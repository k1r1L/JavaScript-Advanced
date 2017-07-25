function solve(commands) {
    let commandProcessor = (function () {
        let objects = new Map;

        function create(name) {
            objects.set(name, {});
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(name, key, value) {
            objects.get(name)[key] = value;
        }

        function print(name) {
            let result = [];
            let objToPrint = objects.get(name);
            for(let prop in objToPrint) {
                let kvp = `${prop}:${objToPrint[prop]}`;
                result.push(kvp);
            }

            console.log(result.join(', '))
        }

        return function (command) {
            let commandTokens = command.split(' ');
            switch (commandTokens[0]) {
                case 'create':
                    if (commandTokens[2] === 'inherit') {
                        inherit(commandTokens[1], commandTokens[3])
                    } else {
                        create(commandTokens[1]);
                    }
                    break;
                case 'set':
                    set(commandTokens[1], commandTokens[2], commandTokens[3])
                    break;
                case 'print':
                    print(commandTokens[1]);
                    break;
            }
        }
    })();

    commands.forEach(commandProcessor)
}