class User {
    constructor() {
        this.default_age = 14
    }

    get age() {
        return this.default_age
    }

    set age(newAge) {

        if (newAge > 0 && newAge < 120) {
            this.default_age = newAge
            console.log(`Установлен новый возраст: ${this.default_age}`)
        } else {
            console.log(`Недопустимый возраст: ${newAge}`)
        }
    }
}


let user1 = new User()
let user2 = new User()


user1.age = 25
user2.age = 130

console.log(`Возраст пользователя 1: ${user1.age}`)
console.log(`Возраст пользователя 2: ${user2.age}`)
