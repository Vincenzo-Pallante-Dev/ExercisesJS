class Person {
  _firstName = "";
  _lastName = "";
  _age = 0;
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  set firstName(fName) {
    if (typeof fName == "string") {
      this._firstName = fName;
    } else {
      console.log("invalid text");
    }
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(lName) {
    if (typeof lName == "string") {
      this._lastName = lName;
    } else {
      console.log("invalid text");
    }
  }
  get lastName() {
    return this._lastName;
  }

  set age(number) {
    if (number < 1) {
      this._age = 1;
    } else if (number > 90) {
      this._age = 90;
    } else {
      this._age = number;
    }
  }
  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
