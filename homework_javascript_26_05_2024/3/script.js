class User {
    static type = "User";
    static baseId = 0;

    constructor(name) {
        this.id = User.baseId;
        User.baseId++;
        this.name = name;
        console.log(`User ${this.name} created !!!`);
    }

    comment(message) {
        document.write(`${this.name} - ${message}`);
        document.write("<br>");
    }
}

class Moderator extends User {
    static type = "Moderator"

    constructor(name, age) {
        super(name)
        this.age = age
    }

    comment(message) {
        document.write(`<strong>${this.name} - ${message}</strong>`)
        document.write("<br>")
    }
}


const user1 = new User("Amir")
user1.comment("Hello")

const mod1 = new Moderator("Gena", 25)
mod1.comment("I am the moderator")

