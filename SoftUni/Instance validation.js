class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.id = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get id(){
        return this._id;
    }
    set id(clientId){
        if(clientId.length<6){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._id = clientId;
    }

    get email(){
        return this._email;
    }
    set email(email){
        let regex = /\b[A-Z0-9a-z]+@[A-Z0-9a-z]+\.[A-Za-z]{2,}\b/g;
        if(!email.match(regex)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        if(!firstName.match('\\w{3,20}')){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        if(!lastName.match("\\w+")){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = lastName;
    }
}
let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
