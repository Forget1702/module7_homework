const users = [
    { name: 'Игорь', age: 21 },
    { name: 'Анна', age: 11 },
    { name: 'Петр', age: 52 },
    { name: 'Герман', age: 14 }
]
const adultUsers = users.filter(user => user.age >= 18);
const userNames = users.map(user => user.name);
console.log(adultUsers);
console.log(userNames);