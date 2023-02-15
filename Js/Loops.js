var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

var todosImportant = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!",
];

// var todosLength = todos.length;
// for (i = 0; i < todosLength; i++) {
//   todos[i] = todos[i] + "!";
//   console.log(todos[i], i);
// }

// todos.forEach(function (todo, i) {
//   todo += "!";
//   console.log(todo, i);
// });

function todosLog(todo, i) {
  console.log(todo, i);
}

todos.forEach(todosLog);
todosImportant.forEach(todosLog);

// var counter = 10;

// while (counter >= 0) {
//   console.log(counter);
//   counter--;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);
