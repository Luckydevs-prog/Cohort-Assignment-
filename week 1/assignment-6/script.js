function greetUser(user) {
  const { name, age } = user; 
  console.log(`Hello ${name}, you are ${age} years old!`);
}

const person = { name: "Lucky", age: 19 };
greetUser(person);
