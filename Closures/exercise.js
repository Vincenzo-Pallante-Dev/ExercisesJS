function printName() {
  let helloName = "Hello Greg!";
  function inner() {
    return helloName;
  }
  return inner;
}

console.log(printName()());
