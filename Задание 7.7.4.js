const person = {
    fullName: 'Игорь Иванов'
}
function setFullName(obj, fullName) {
    obj.fullName = fullName;
}
const setPersonFullName = setFullName.bind(null, person);
setPersonFullName('John Smith');
console.log(person);