const h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "This is a Good shoping list";

const second = document.getElementsByClassName("second");
second[0].innerHTML = "Get it done Tommarow";

const h2 = document.getElementById("text");
h2.innerHTML = "This text is Heading Element in HTML";

const li = document.querySelector("li");

const allLi = document.querySelectorAll("li");
allLi[1].innerHTML = "Meisam Mohammadi";
console.log(allLi[1]);
