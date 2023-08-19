const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage() {
  localStorage.setItem("obj", JSON.stringify(user));
  let object = localStorage.getItem("obj");
  let par = document.createElement("p");
  let content = document.createTextNode(object);
  let body = document.querySelector("body");
  par.appendChild(content);
  body.appendChild(par);
  let str = JSON.stringify(object);
  let objParse = JSON.parse(object);
  console.log(`Stampo in console con il metodo stringify: ${str}`);
  console.log(`Stampo in console con il metodo parse: ${objParse}`);
}

saveUserToLocalStorage();
