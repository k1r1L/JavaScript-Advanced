class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }

    render(id) {
        $(`#${id}`).append(this.element);
    }

    update() {
        if(this._online){
            this.element.find('.title').addClass('online')
        } else {
            this.element.find('.title').removeClass('online')
        }
    }

    createElement() {
        let info = $('<div>')
            .addClass('info')
            .css('display', 'none');
        return $('<article>')
            .append($('<div>')
                .addClass('title')
                .text(this.firstName + ' ' + this.lastName)
                .append($('<button>')
                    .html('&#8505;')
                    .click(() => info.toggle())))
            .append(info
                .append($('<span>')
                    .html(`&phone; ${this.phone}`)
                    .append($('<span>')
                        .html(`&#9993; ${this.email}`))))
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[1].online = true, 2000);
