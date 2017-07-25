function solve () {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(ingredient, quantity) {
        quantity = Number(quantity);
        ingredients[ingredient] += quantity;
        return "Success";
    }

    function prepare(recipe) {
        switch (recipe) {
            case "apple":
                return prepareApple();
            case "coke":
                return prepareCoke();
            case "burger":
                return prepareBurger();
            case "omelet":
                return prepareOmelet();
            case "cheverme":
                return prepareCheverme();
        }
    }

    function prepareApple() {
        if(ingredients.carbohydrate < 1){
            return 'Error: not enough carbohydrate in stock'
        } else if(ingredients.flavour < 2){
            return 'Error: not enough flavour in stock'
        } else {
            ingredients.carbohydrate -= 1;
            ingredients.flavour -= 2;
            return 'Success'
        }
    }

    function prepareCoke() {
        if(ingredients.carbohydrate < 10){
            return 'Error: not enough carbohydrate in stock'
        } else if(ingredients.flavour < 20){
            return 'Error: not enough flavour in stock'
        } else {
            ingredients.carbohydrate -= 10;
            ingredients.flavour -= 20;
            return 'Success';
        }
    }

    function prepareBurger() {
        if(ingredients.carbohydrate < 5){
            return 'Error: not enough carbohydrate in stock'
        } else if(ingredients.fat < 7){
            return 'Error: not enough fat in stock'
        } else if(ingredients.flavour < 3){
            return 'Error: not enough flavour in stock'
        } else {
            ingredients.carbohydrate -= 5;
            ingredients.fat -= 7;
            ingredients.flavour -= 3;
            return 'Success';
        }
    }

    function prepareOmelet() {
        if(ingredients.protein < 5){
            return 'Error: not enough protein in stock'
        } else if(ingredients.fat < 1){
            return 'Error: not enough fat in stock'
        } else if(ingredients.flavour < 1){
            return 'Error: not enough flavour in stock'
        } else {
            ingredients.protein -= 5;
            ingredients.fat -= 1;
            ingredients.flavour -= 1;
            return 'Success';
        }
    }

    function prepareCheverme() {
        if(ingredients.protein < 10){
            return 'Error: not enough protein in stock'
        } else if(ingredients.carbohydrate < 10){
            return 'Error: not enough carbohydrate in stock'
        } else if(ingredients.fat < 10){
            return 'Error: not enough fat in stock'
        } else if(ingredients.flavour < 10){
            return 'Error: not enough flavour in stock'
        } else {
            ingredients.protein -= 10;
            ingredients.carbohydrate -= 10;
            ingredients.fat -= 10;
            ingredients.flavour -= 10;
            return 'Success';
        }
    }

    return function (instructions) {
        let tokens = instructions.split(' ');
        switch (tokens[0]) {
            case 'restock':
                return restock(tokens[1], tokens[2]);
            case 'prepare':
                let quantity = Number(tokens[2]);
                let message;
                for(let i = 0; i < quantity; i++) {
                    message = prepare(tokens[1]);
                    if(message !== 'Success'){
                        break;
                    }
                }
                return message;
            case 'report':
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }
}