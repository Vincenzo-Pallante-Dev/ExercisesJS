function printName() {
  let helloName = "Hello Greg!";
  function inner() {
    setTimeout(() => {
      console.log(helloName);
    }, 1000);
  }
  return inner;
}

printName()();
