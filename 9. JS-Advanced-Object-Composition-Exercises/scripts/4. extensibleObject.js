function solve() {
    let myObj =  {
        extend: function (template) {
            for(let prop in template) {
                if(typeof template[prop] === "function"){
                    Object.getPrototypeOf(myObj)[prop] = template[prop]
                } else {
                    myObj[prop] = template[prop];
                }
            }
        }
    };

    return myObj;
}
