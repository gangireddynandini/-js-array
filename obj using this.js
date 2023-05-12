// let apple = {
//     name: "nandu",
//     licence: true,
//     birthyear: 1999,
//     age: function () {
//         this.age = 2023 - this.birthyear;
//         return this.age;

//     },
//     summary: function () {
//         return (`${this.name} is a ${this.age} years old,and he has ${this.licence ? 'a' : 'no'} licence`)
//     }
// }
// console.log(apple.age())
// console.log(apple.summary())

console.log('-----------------------------------------')
let mark = {
    name1: 'mark',
    mass1: 45,
    height1: 6,
    name2: 'john',
    mass2: 67,
    height2: 6.5,
    calc1: function () {
        this.bmimark = this.mass1 / (this.height1 * 2)
        return this.bmimark
    },
    calc2: function () {
        this.bmijohn = this.mass2 / (this.height2 * 2)
        return this.bmijohn
    },
    summ: function () {
        return (`${this.name1}'s bmi ${this.calc1()} and ${this.name2}'s bmi ${this.calc2()}`)
    },
    com: function () {
        return this.calc1() > this.calc2 ? (`${this.name1} bmi is higher than ${this.name2}`) : (`${this.name2} bmi is higher than${this.name1}`)
    }

}
mark.calc1()
mark.calc2()
console.log(mark.bmimark, "   ", mark.bmijohn)
console.log(mark.summ())
console.log(mark.com())