// ****** ARRAY *****
// var list = ["tiger", "cat", "bear", "monky"];

// console.log("Tiger: ", list[0]);
// console.log(list);
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.unshift("elphent"));
// console.log(list.push("line"));

// var listtwo = ["ant", "eggle"];

// var newList = listtwo.concat([list]);
// console.log(newList);

// var myList = list.concat(["eggle"]);
// console.log(myList);

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the arry
// 2. Sort the array in order
// 3. Put "Kiwi" at the end of the arry
// 4. Remove "Apples" from the arry
// 5. Sort the array in reverse order. (Not alphabetical, but revers
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// You should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// Using this array,
// var array = ["Banana", ["Apples", ["Oranges",] "Blueberries"]]
// access "oranges".

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// console.log(array.shift());
// console.log(array.sort());
// console.log(array.push("Kiwi"));
// console.log(array.splice(0, 1));
// // console.log(array.indexOf("0"));
// console.log(array);
// console.log(array.reverse());
// console.log(array2[1][1][0]);

// ***** OBJECT *****

// var myObj = {
//   name: "Meisam",
//   age: 33,
//   hobby: "Soccer",
//   isMarried: false,
//   shout: function () {
//     console.log("this is array in object");
//   },
//   animal: ["tiger", "monky", "elephent"],
// };

// access to function in array
// and acually we can access to array in object:
// like this we want to access monky in array in myObj object:
// myObj.animal[1] ==> monky
// also we can use the bulite function in this array in object

// var list = [
//   "apples",
//   "Kiwi",
//   "Oranges",
//   {
//     name: "Majid",
//     lastName: "Rahimi",
//     hobby: "HichHik",
//     age: 35,
//   },
// ];

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// {
// 	username: "andrei",
// 	password: "supersecret"
// }

// 2. Create an array which contains the object you have made above and name the arry "database"
// var database = [
//   {
//     username: "andrei",
//     password: "supersecret",
//   },
// ];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsfeed = [
//   {
//     username: "Bobby",
//     timeline: "So tired from all that learning!",
//   },
//   {
//     username: "Sally",
//     timeline: "Javascript is sooooo cool!",
//   },
//   {
//     username: "Mitch",
//     timeline: "Javascript is preeetyy cool!",
//   },
// ];

var dataBase = [
  {
    username: "Meisam",
    password: "123",
  },
];

var newsFeed = [
  {
    name: "Boby",
    timeline: "This is a coool javascript video",
  },
  {
    name: "Sully",
    timeline: "Javascript is very cool",
  },
];

var usernamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(user, pass) {
  if (user === dataBase[0].username && pass === dataBase[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong your username or password");
  }
}

signIn(usernamePrompt, passwordPrompt);
