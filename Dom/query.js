function myFunction() {
  let x = document.getElementById("myDiv");
  x.querySelector(".test").innerHTML = " Meisam Mohammadi";
}

function changeColor() {
  let colorLi = document.querySelectorAll("li");
  colorLi[1].style.color = "red";
}

let h1get = document.getElementById("h1get");
let h1Text = h1get.getAttribute("class");
document.getElementById("getdemo").innerHTML = h1Text;

let setClass = function () {
  let h1set = document.getElementById("setclass");
  h1set.setAttribute("class", "democlass");
};

let addClass = function () {
  const h1AddClass = document.querySelectorAll(".test");
  h1AddClass[0].setAttribute("class", "fontSize");
};
