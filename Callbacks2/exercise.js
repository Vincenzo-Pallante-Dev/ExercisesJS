function printAsyncName(callback) {
  let id = setInterval(() => console.log(callback), 1000);
  setTimeout(() => clearInterval(id), 7000);
}

printAsyncName("Hello");

//Spiegazione
//È meglio usare una funzione freccia quando si scrive una richiamata,
//perché la sintassi è molto più semplice rispetto alla scrittura di una funzione completa
