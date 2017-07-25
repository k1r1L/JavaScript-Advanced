class SortedList {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(element) {
        this.items.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            this.size--;
        } else {
            throw new RangeError('Index is outside the bounds of the list!');
        }
    }

    get(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        } else {
            throw new RangeError('Index is outside the bounds of the list!');
        }
    }


    sort() {
        this.items.sort((a, b) => a - b);
    }
}
