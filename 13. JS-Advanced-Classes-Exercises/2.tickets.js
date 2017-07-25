function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for(let line of arr) {
        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    return tickets.sort(
        (a, b) => a[criteria] > b[criteria])
}