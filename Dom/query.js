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
