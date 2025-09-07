function greetUser (user) {
    const { name, age, gendre } = user;
    let prefix;
    if (gendre === "male") {
        prefix = "Mr";
    } else if (gendre === "female") {
        prefix = "Mrs";
    } else {
        prefix = "others";
    }

    console.log(`Hi ${prefix} ${name}, your age is ${age}`);

    if (age >= 18){
        console.log ("you are legal to vote");
    } else {
        console.log(" you are not legal to vote");
    }
}

const user1 = { name: "Harkirat", age: 21, gendre: "male"};
const user2 =  { name: "Lucky", age: 17, gendre: "male"};

greetUser(user1);
greetUser(user2);
