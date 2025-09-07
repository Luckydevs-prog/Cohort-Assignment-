function getAdultUsers(users) {
    return users.filter(user => user.age > 18);
}

const users = [
    { name: "lucky", age: 19 },
    { name: "harkirat", age: 21 },
    { name: "golu", age: 17 },
    { name: "isha", age: 20 }

];

const adults = getAdultUsers(users);
console.log(adults);
