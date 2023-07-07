const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2["firstName"] = "Simon";

console.log(person1);
console.log(person2);

// Spiegazione:
// modificando l'oggetto `person2`, viene modificato anche l'oggetto `person1`.
// perchè in questo caso sto applicando un pass by reference, ovvero:
// i 2 oggetti puntano alla stessa posizione dei dati in memoria.
// A differenza del pass by value che mi crea una copia senza influenzare
// l'oggetto originale che punta in una differerente posizione dei dati in memoria
