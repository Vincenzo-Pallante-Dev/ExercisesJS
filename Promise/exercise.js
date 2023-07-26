const number = 15;

let num = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("Il numero non è maggiore di 10"));
  }
});

num.then((number) => console.log(number)).catch((err) => console.error(err));
