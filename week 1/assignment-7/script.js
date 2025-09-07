function greetUser(user) {
    const { name, age, gender } = user;

    let prefix;
    if (gender === "male") {
        prefix = "Mr";
    } else if (gender === "female") {
        prefix = "Mrs";
    } else {
        prefix = "others";
    }

    console.log(`Hi ${prefix} ${name}, your age is ${age}`);
}

const newUser = { name: "Harkirat", age: 21, gender: "male" };
greetUser(newUser);
