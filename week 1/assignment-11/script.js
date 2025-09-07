function getAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}

const users = [
    { name: "Lucky", age: 19, gender: "male" },
    { name: "Aarav", age: 16, gender: "male" },
    { name: "Neha", age: 22, gender: "female" },
    { name: "Harkirat", age: 25, gender: "male" }
];

const adultMales = getAdultMales(users);

adultMales.forEach(user => {
    console.log(`${user.name} - ${user.age} - ${user.gender}`);
});
