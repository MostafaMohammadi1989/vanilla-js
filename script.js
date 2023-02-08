// ***** Function section *****

// function sayHello() {
//   console.log("hello");
// }

// sayHello();

// function sayBye() {
//   console.log("Bye");
// }

// sayBye();

// function sing(song) {
//   console.log(song);
// }

// sing("ladddddd");
// sing("daaaaaaaaa");
// sing("saaaaaaaaa");

// function multiply(a, b) {
//   return a * b;
// }

// alert(multiply(5, 10));

// var multiply = function (a, b) {
//   if (a >= 10 || b >= 10) {
//     alert("The parameters high");
//   } else {
//     return a * b;
//   }
// };

// let multi = multiply(4, 5);

// alert(multi);
function multiply(a, b) {
  if (a > 10 || b > 10) {
    alert("The parameters is to high");
  } else {
    return a * b;
  }
}

let total = multiply(5, 4);
alert(total);
