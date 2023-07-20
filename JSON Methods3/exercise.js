const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

const str = JSON.stringify(person1);
const obj = JSON.parse(str);
const person2 = { ...obj };
obj.address.city = "Milan";

console.log(person1);
console.log(person2);
