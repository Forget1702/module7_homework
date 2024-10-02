function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: 'Игорь',
    age: 21
}
printInfo.call(person);