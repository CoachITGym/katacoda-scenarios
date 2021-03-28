function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    return `${nameIntro} ${firstName} ${lastName}`;
  }

  return makeFullName();
}

showName("Michael", "Jackson"); // Your name is Michael Jackson

/* 
function addAStringFactory(strOuter) {
  return function (strInner) {
    return `${strOuter} ${strInner}`;
  };
}

let sayHello = addAStringFactory("Hello!");
let sayBye = addAStringFactory("Bye!");

console.log(sayHello("Vedu"));
console.log(sayBye("Vedu"));
*/