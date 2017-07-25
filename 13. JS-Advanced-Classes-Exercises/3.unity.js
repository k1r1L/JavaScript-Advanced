class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.unitedRats.push(otherRat);
        }
    }

    toString() {
        let result = this.name + '\n';
        for(let rat of this.unitedRats) {
            result += "##" +  rat.name + '\n';
        }

        return result.trim();
    }
}