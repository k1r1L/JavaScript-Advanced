function checkingAccount(clientId, email, firstName, lastName) {
    if(!/^\d{6}$/g.test(clientId)){
        throw new TypeError('Client ID must be a 6-digit number')
    }

    if(!/^[A-Za-z\d]+@[A-Za-z.]+$/g.test(email)){
        throw new TypeError('Invalid e-mail');
    }

    if(firstName.length < 3 || firstName.length > 20){
        throw new TypeError('First name must be between 3 and 20 characters long');
    }

    if(lastName.length < 3 || lastName.length > 20){
        throw new TypeError('Last name must be between 3 and 20 characters long');
    }

    if(!/^[A-Za-z]{3,20}$/g.test(firstName)){
        throw new TypeError('First name must contain only Latin characters')
    }

    if(!/^[A-Za-z]{3,20}$/g.test(lastName)){
        throw new TypeError('Last name must contain only Latin characters')
    }
}