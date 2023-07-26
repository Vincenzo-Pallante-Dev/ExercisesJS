const isLogged = true;

let rand = Math.random();

let controllo = new Promise((resolve, reject) => {
  if (isLogged == true) {
    resolve(rand);
  } else {
    reject(new Error("Error!"));
  }
});

let controllo2 = new Promise((resolve, reject) => {
  if (rand > 0.5) {
    resolve(console.log(`{ nome: "jhon", età: 24 }`));
  } else {
    reject(new Error("Error!"));
  }
});

controllo
  .then(controllo2)
  .then((y) => console.log(y))
  .catch((err) => console.error(err));
