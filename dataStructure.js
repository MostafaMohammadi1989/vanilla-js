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

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

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

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array.shift());
console.log(array.sort());
console.log(array.push("Kiwi"));
console.log(array.splice(0, 1));
// console.log(array.indexOf("0"));
console.log(array);
console.log(array.reverse());
console.log(array2[1][1][0]);
